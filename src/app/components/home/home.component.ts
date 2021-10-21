import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Standard } from 'src/app/dtos/standard';


export function forbiddenStringValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    return String(control.value).includes(',') ? null : {inValidString: true};
  };
}

export function CheckNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // const regx = new RegExp('[a-z][A-Z]')
    return (/^[a-zA-Z]/.test(control.value) ? {notNumber: true} : null);
    // return String(control.value).includes(',') ? null : {inValidString: true};
  };
}

// checnum(as)
// {
//     var a = as.value;
//     as.value = a.replace(/[^\d.,-]/g, '');
// }


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  inputText = new FormControl('', [Validators.required,Validators.minLength(4)]);

  result = new Standard();
  constructor() { }

  ngOnInit() {
  }



  calculate(): boolean {
    let vva = this.inputText.value;
    if(vva == '') {
        alert('Enter Data');
        return false;
    } else {
        vva = vva.replace(' ','');
        var resul;
        var bb = true;
        if(vva != '')
        {
          resul = vva.split(',');
        }

        for(let v=0; v<resul.length; v++)
        {
          let d = resul[v];
          if(isNaN(d) || d == '')
          {
              alert('The number '+d+' is not a valid one');
              let bb = false;
              break;
          }
        }

        if(bb == true)
        {
          let tot = resul.length;
          let mean=0;
          this.result.total = tot;
          //Mean calculation
          for(let c=0; c<tot; c++) {
            mean = mean+parseFloat(resul[c]);
          }
          mean = mean/tot;
          this.result.mean = Math.round(mean*100000)/100000;
          //letiance calculation
          let variance=0;
          let b;
          let varian = 0;
          for(var a=0; a<tot; a++)
          {	
            variance = variance+Math.pow((parseFloat(resul[a])-mean),2);
            b = tot-1;
            varian = variance/b; 
          }
          this.result.variance = Math.ceil(varian/100)*100;
          //Standard Deviation Calculation
          var sd=0;
          {
            sd = Math.sqrt(varian);
          }
          this.result.sd = Math.ceil(sd/100)*100;
          //Population Standard deviation
          let pop = 0;
          let pop1 = 0;
          {
            pop = variance/tot; 
            pop1 = Math.sqrt(pop); 
          }
          this.result.populationSd = Math.round(pop1*100000)/100000;
          //Variance Population Standard deviation
          let varpop = 0;
          {
            varpop = variance/tot; 
          }
          this.result.variancePopulationSd = Math.round(varpop*100000)/100000;
        }
    }

    return true;
  }

  reset() {
    this.inputText.setValue('');
    this.result = new Standard();
  }






  checnum(event: any) {
      var a = this.inputText.value;
      this.inputText.setValue( a.replace(/[^\d.,-]/g, ''));
  }

  trimExtraComma() {
      var utext = this.inputText.value.trim();
      var firstChar = utext.substring(0, utext.length);
      if(firstChar == ',')
      {
          utext = utext.substring(1);
      }
      utext = this.trimContinuousSymbols(utext.replace(/,+(?=,)/g,''),'.');
      utext = utext.replace('.,',',');
      
      this.inputText.setValue(utext);
  }
  trimContinuousSymbols(string: string,symb: any){
    let valAry= string.split(",");
    let newStr="";
    for(let con=0;con<valAry.length;con++)
    {
      let strCount=this.countString(valAry[con],symb);
      if(strCount>1) {
        valAry[con]=valAry[con].slice(0,-1);
      }
      newStr=newStr+valAry[con];
      if((valAry.length-1)!=con){
        newStr=newStr+",";
      }
    }
    return newStr;
  }
  countString(str:any,search: any){
    let count=0;var index=str.indexOf(search);
    while(index!=-1) {
      count++;index=str.indexOf(search,index+1);
    }
    return count;
  }


}
