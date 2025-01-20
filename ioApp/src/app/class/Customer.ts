export class Customer {
    customerId : number ;
    customerName : string ;
    mobile : string ;
    emailId ?: string ;   // using ? mark makes them optional and we dont need to initialize value also.
    address ?: string;

    // Creating constructor to initialize an class variable
    constructor(customerId: number, customerName: string, mobile: string, emailId?: string, address?: string) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.mobile = mobile;
        this.emailId = emailId;
        this.address = address;
    }

    getDetails(){
        return `ID: ${this.customerId}, Name : ${this.customerName}, Mobile : ${this.mobile}, Email : ${this.emailId}, Address : ${this.address}`;
    }
}

// Creating instance of the class
const customer = new Customer(101, 'Rajeev Gupta', '1234567890', 'rajeev29@gmail.com','Roadpali');
console.log(customer.getDetails());

