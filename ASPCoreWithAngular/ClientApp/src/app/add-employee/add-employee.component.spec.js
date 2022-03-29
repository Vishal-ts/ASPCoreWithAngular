"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var add_employee_component_1 = require("./add-employee.component");
describe('AddEmployeeComponent', function () {
    var component;
    var fixture;
    beforeEach((0, testing_1.async)(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [add_employee_component_1.AddEmployeeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(add_employee_component_1.AddEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-employee.component.spec.js.map