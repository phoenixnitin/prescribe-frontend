import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    userData = {};
    selectedCategory: any = 'vitals';
    value_model1: any;
    key_model2: any;
    value_model2: any;
    value_model3 = {
        'medicine': '',
        'quantity': '',
        'afterOrBefore': '',
        'times': '',
        'days': ''
    };

    constructor(private http: HttpClient) {
        this.http.get('assets/data/tempuserdata.json').subscribe(data => {
            this.userData = data['user1234']['homepage'];
        }, error => {
            console.log('error happened');
        });
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

    ngOnInit() {
    }

    openModel(category) {
        this.selectedCategory = category;
        if (this.userData['categories'][category]['type'] === 'array') {
            $('#inputModel1').modal();
        } else if (this.userData['categories'][category]['type'] === 'dict') {
            $('#vitalsType').modal();
        } else if (this.userData['categories'][category]['type'] === 'arrayOfArray') {
            $('#inputModel4').modal();
        }
    }

    onFormSubmit(formType) {
        if (formType === 'array') {
            this.userData['categories'][this.selectedCategory]['data'].push(this.value_model1);
            this.value_model1 = '';
            $('#inputModel1').modal('hide');
        } else if (formType === 'dict') {
            this.userData['categories'][this.selectedCategory]['data'][this.key_model2] = this.value_model2;
            this.key_model2 = '';
            this.value_model1 = '';
            $('#inputModel2').modal('hide');
        } else if (formType === 'arrayOfArray') {
            this.userData['categories'][this.selectedCategory]['data'].push([
                this.value_model3.medicine,
                this.value_model3.quantity,
                this.value_model3.afterOrBefore,
                this.value_model3.times,
                this.value_model3.days
            ]);
            this.value_model3.medicine = '';
            this.value_model3.quantity = '';
            this.value_model3.afterOrBefore = '';
            this.value_model3.times = '';
            this.value_model3.days = '';
            $('#inputModel3').modal('hide');
        }
    }

    returnObjectKeys(dictionary) {
        if (dictionary !== undefined) {
            const obj = Object.keys(dictionary);
            return obj;
        } else {
            return [];
        }
    }

    returnIsArray(object) {
        return Array.isArray(object);
    }

    returnIsString(object) {
        return typeof (object) === 'string' ? true : false;
    }
}
