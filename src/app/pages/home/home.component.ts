import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { ConsultsService } from '../../services/consults.service';
import { ICharacters } from '../../interfaces/ICharacters';



@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
  public characters: ICharacters | undefined;
  public consCharacter!: any
  public inpSearch!: string;
  public actualPage: number = 1
  public totalPages: number = 0

  constructor(private renderer: Renderer2, private consult: ConsultsService<ICharacters>){}

  focoInput() {
    this.renderer.selectRootElement('#inpSearch').focus();
  }

  ngOnInit(): void {
    this.consultCharacter('/character')
  }

  changePage(param: string){
    switch(param) {
      case "next":
        if(this.actualPage < this.totalPages){
          this.characters?.info.next?this.consultNewPage(this.characters.info.next):null;
          this.actualPage++
        }
          break;
      case "prev":
        if(this.actualPage > 1){
          this.characters?.info?.prev?this.consultNewPage(this.characters.info.prev):null;
          this.actualPage--
        }
    }
  }
  
  consultCharacter(param: string){
    this.consCharacter = this.consult.get(param).subscribe((data: ICharacters) => {
      this.characters = data
      this.totalPages = data.info.pages
      console.log(data)
      console.log(this.characters.results)
    }, err=>{
      this.characters = undefined
    })
  }

  consultNewPage(param: string){
    this.consCharacter = this.consult.getPages(param).subscribe((data: ICharacters) => {
      this.characters = data
      this.totalPages = data.info.pages
      console.log(data)
      console.log(this.characters.results)
    }, err=>{
      this.characters = undefined
    })
  }

  ngOnDestroy(): void {
    this.consCharacter.unsubscribe()
  }

  onKeydown(event: any) {
    if (event.key === "Enter") {
      this.inpSearch==undefined?this.inpSearch=='':null;
      this.consultCharacter(`/character/?name=${this.inpSearch}`)
      this.actualPage = 1
    }
  }

}
