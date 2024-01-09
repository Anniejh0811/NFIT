import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { GoogleMap } from '@angular/google-maps';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-studioes',
  templateUrl: './studioes.component.html',
  styleUrls: ['./studioes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class StudioesComponent {
  @ViewChild('myGoogleMap', { static: true }) map!: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 48.8588548, lng: 2.347035 },
    zoom: 13,
  };


  markers: MarkerProperties[] = [
    { position: { lat: 48.8584, lng: 2.2945 }}, // Eiffel Tower
    { position: { lat: 48.8606, lng: 2.3376 }}, // Louvre Museum
    { position: { lat: 48.8530, lng: 2.3499 }}, // Cathédrale Notre-Dame de Paris
  ];


  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Chestnut Hill, MA',
      address1: '320 Bolyston St',
      address2:'',
      city:'Chestnut Hill',
      state:'MA',
      phoneNumber:'6175317077',
    },
    {
      id: 2,
      name: 'Franklin St, MA',
      address1: '290 Franklin St',
      address2:'',
      city:'Boston',
      state:'MA',
      phoneNumber:'6174262140',
    },
    {
      id: 3,
      name: 'Seaport, MA',
      address1: '27 Northern Ave',
      address2:'',
      city:'Seaport',
      state:'MA',
      phoneNumber:'6175317077',
    },
    {
      id: 4,
      name: 'Boston, MA',
      address1: '8 Avery St',
      address2:'',
      city:'Boston',
      state:'MA',
      phoneNumber:'6173758200',
    },
    {
      id: 5,
      name: 'Chestnut Hill, MA',
      address1: '320 Bolyston St',
      address2:'',
      city:'Chestnut Hill',
      state:'MA',
      phoneNumber:'6175317077',
    },
  ];

  isCollapsed:any = true
  public historyListMaxNumber: number = 3;
  selectEvent(item: any) {
    // do something with selected item
    this.isCollapsed = item;
    console.log(item);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    

  }
  
  onFocused(){
    // do something when input is focused
  }

 

  onSubmit(val:any) {
    console.log(val);
  
  }

  name = '';
  reactiveForm: FormGroup;
  
 


  public placeholder: string = 'Enter the Country Name';
  // public keyword = 'name';
  public historyHeading: string = 'Recently selected';
  constructor(private _fb: FormBuilder) {
    this.reactiveForm = _fb.group({
      name: [{value: '', disabled: false}, Validators.required]
    });
  }

  submitReactiveForm() {
    // if (this.reactiveForm.valid) {
      console.log(1);
      console.log(this.reactiveForm.value);
    // }
  }

 

  submitTemplateForm(value:any) {
    console.log(value);
  }


}
