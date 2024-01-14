import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { GoogleMap } from '@angular/google-maps';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


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

  faPhone = faPhone;
  map2:any = '';
  mapOptions: google.maps.MapOptions = {
    center: { lat: 48.8588548, lng: 2.347035 },
    zoom: 13,
  };


  markers: MarkerProperties[] = [
    { position: { lat: 48.8584, lng: 2.2945 }}, // Eiffel Tower
    // Louvre Museum
     // Cathédrale Notre-Dame de Paris
  ];


  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'San Pablo, CA',
      address1: '97 La Sierra Road',
      address2:'',
      city:'San Pablo',
      state:'CA',
      phoneNumber:'6175317077',
      lat: 37.964331, 
      long: -122.350914,
    },
{
      id: 2,
      name: 'South San Francisco, CA',
      address1:'26 Country Club Ave.',
      address2:'',
      city:'South San Francisco',
      state:'CA',
      phoneNumber:'4793640347',
      lat: 37.658929,
      long: -122.427005,
    },
{
      id: 3,
      name: 'Alameda, California',
      address1: '2610 Fifth St.',
      address2:'',
      city:'Alameda',
      state:'CA',
      phoneNumber:'785541578',
      lat: 37.766416,
      long: -122.250498,
    },
{
      id: 4,
      name: 'Oceanside, CA',
      address1: '9629 Fulton Street.',
      address2:'',
      city:'Oceanside',
      state:'CA',
      phoneNumber:'46851234',
      lat: 33.192155,
      long: -117.372845,
    },
{
      id: 5,
      name: 'Van Nuys, CA',
      address1: '8210 Wild Horse Dr.',
      address2:'',
      city:'Van Nuys',
      state:'CA',
      phoneNumber:'7684126852',
      lat: 34.200105,
      long: -118.457446,
    },
{
      id: 6,
      name: 'Ceriitos, CA',
      address1: '9221 E. Clinton Ave',
      address2:'',
      city:'Cerritos',
      state:'CA',
      phoneNumber:'8762647851',
      lat: 33.860707, 
      long:-118.063621,
    },
{
      id: 7,
      name: 'Tracy, CA',
      address1: '159 8th Court',
      address2:'',
      city:'Tracy',
      state:'CA',
      phoneNumber:'4981351278',
      lat: 37.731218,
      long: -121.456605,
    },
{
      id: 8,
      name: 'Sunset, CA',
      address1: '77 Sunset Ave.',
      address2:'',
      city:'San Francisco',
      state:'CA',
      phoneNumber:'7321984681',
      lat: 37.762352, 
      long:-122.470027,
    },
{
      id: 9,
      name: 'Fountain Valley, CA',
      address1: '50 Longbranch Dr.',
      address2:'',
      city:'Fountain Valley',
      state:'CA',
      phoneNumber:'0127950648',
      lat: 33.701398, 
      long:-117.967215,
    },
{
      id: 10,
      name: 'Lompoc, CA',
      address1: '17 Sunset Street',
      address2:'',
      city:'Lompoc',
      state:'CA',
      phoneNumber:'7942584197',
      lat: 34.643817, 
      long:-120.458503, 
    },
{
      id: 11,
      name: 'Huntington Beach, CA',
      address1: '8914 Amerige Road',
      address2:'',
      city:'Huntington Beach',
      state:'CA',
      phoneNumber:'1468027068',
      lat: 33.686688,      
       long:-117.995662,
    },
{
      id: 12,
      name: 'Lafayette St., CA',
      address1: '83 Lafayette St.',
      address2:'',
      city:'San Jose',
      state:'CA',
      phoneNumber:'0974680198',
      lat: 37.303997, 
      long:-121.896778,
    },
{
      id: 13,
      name: 'Rockville Ave, CA',
      address1: '8797 Rockville Ave.',
      address2:'',
      city:'San Diego',
      state:'CA',
      phoneNumber:'7680985498',
      lat: 32.719179, 
      long:-117.162003,
    },
{
      id: 14,
      name: 'Lake Court, CA',
      address1: '7607 Lake Court.',
      address2:'',
      city:'Los Angeles',
      state:'CA',
      phoneNumber:'0798541578',
      lat: 34.040168, 
      long:-118.259913,
    },
{
      id: 15,
      name: 'Lake Forest Dr, CA',
      address1: '530 Lake Forest Dr.',
      address2:'',
      city:'Los Angeles',
      state:'CA',
      phoneNumber:'0798541578',
      lat: 34.027764, 
      long:-118.478006    },
{
      id: 16,
      name: 'Williams Lane, CA',
      address1: '9154 Williams Lane',
      address2:'',
      city:'Los Angeles',
      state:'CA',
      phoneNumber:'7684581370',
      lat: 34.063548, 
      long:-118.305430,
    },
{
      id: 17,
      name: 'Alhambra, CA',
      address1: '42 Pacific Drive',
      address2:'',
      city:'Alhambra',
      state:'CA',
      phoneNumber:'0874680320',
      lat: 34.079607, 
      long:-118.103039,
    },
{
      id: 18,
      name: 'El Cajon, CA',
      address1: '34 Fairview Dr.',
      address2:'',
      city:'El Cajon',
      state:'CA',
      phoneNumber:'9610780921',
      lat: 32.807467, 
      long:-116.967329,
    },
{
      id: 19,
      name: 'Napa, CA',
      address1: '88 North Delaware Street',
      address2:'',
      city:'Napa',
      state:'CA',
      phoneNumber:'9047614084',
      lat: 38.30858009047647,     
      long: -122.29549635835765, 
    },
{
      id: 20,
      name: 'Oxnard, CA',
      address1: '165 Griffin Drive',
      address2:'',
      city:'Oxnard',
      state:'CA',
      phoneNumber:'0422752214',
      lat: 34.210582, 
      long:-119.194529,
    },
  ];


  result:any = false;
  public onMapReady(map:any) {
    this.map2 = map;
  }

  // isCollapsed:any = true
  public historyListMaxNumber: number = 3;
  selectEvent(item: any) {
    this.result = true;
    // do something with selected item
    // this.isCollapsed = item;
    // console.log(item);
    this.markers.pop();
    this.markers.push({ position: { lat: item.lat, lng: item.long }})
    // this.mapOptions.center = { lat: item.lat, lng: item.long };
    // this.mapOptions.center = new google.maps.LatLng({ lat: item.lat, lng: item.long })
    // console.log(this.mapOptions.center);
 
    // this.map2.panTo( { lat: item.lat, lng: item.long })

    this.mapOptions = {...this.mapOptions,
      center: {
        lat: item.lat,
        lng: item.long,
      },

    }
    
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

  onInputClear(){
    this.result = false;
  }

  submitTemplateForm(value:any) {
    console.log(value);
  }


}
