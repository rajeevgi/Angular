export class Customer {
    customerId : number ;
    customerName : string ;
    mobile : string ;
    emailId ?: string ;   // using ? mark makes them optional and we dont need to initialize value also.
    address ?: string;

    // Creating constructor to initialize an class variable
    constructor() {
        this.customerId = 0;
        this.customerName = '';
        this.mobile = '';
    }

}
