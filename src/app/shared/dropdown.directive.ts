import {Directive, HostBinding, HostListener,ElementRef} from '@angular/core';
@Directive({
  'selector':'[appDropdown]'

})
export class DropdownDirective
{
   @HostBinding('class.open') isopen:boolean=false;
   @HostListener('document:click',['$event']) toggleopen(event:Event)
   {
       this.isopen=this.elref.nativeElement.contains(event.target)? !this.isopen:false;
   }

  constructor(private elref:ElementRef){}


}
