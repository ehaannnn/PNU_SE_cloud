import { Component } from '@angular/core';
import { VM } from '../Data/vm';
import { Server } from '../Data/server';
import { SelectedServer } from '../SelectedServer-service';
import { State } from '../Data/vm';

import { Compute_Instance } from './Compute_Instance';

@Component({
    selector: 'VDI',
    templateUrl: './VDI.component.html',
    styleUrls: ['./VDI.component.css']
})

export class VDIComponent {

    constructor(public selected: SelectedServer, private ci_server: Compute_Instance, private ci_flavor: Compute_Instance) {
        this.selected.server.vmlist = new Array<VM>();
        ci_server.server_promise().then(text => {
            let i: number = 0;
            for (; i < text['servers'].length; ++i) {
                let flavor_id = text['servers'][i]['flavor']['id'];
                let instance_name = text['servers'][i]['name'];

                let disk_size;
                let _RAM, _CPU;

                ci_flavor.flavor_promise().then(text => {

                    text['flavors'].forEach(element => {
                        if (flavor_id == element['id']) {
                            disk_size = element['disk'];
                            _CPU = element['vcpus'];
                            _RAM = element['ram'];
                        }
                    });

                    let VM_tmp: VM = new VM(instance_name, "", State.ON, _CPU, _RAM, disk_size);

                    this.selected.server.vmlist.push(VM_tmp);
                    console.log(this.selected.server.vmlist[0].CPU);
                }, function (error) {
                    console.log(error);
                });
            }


        }, function (error) {
            console.log(error);
        });
    }

    NtoS(state: State) {
        if (state == State.ON)
            return "ON";
        else if (state == State.OFF)
            return "OFF";
        else if (state == State.PAUSE)
            return "PAUSE";
    }
}