import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBindingComponent {
  // Example 1: User Profile Form
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
    isActive: true,
    country: 'USA',
    bio: 'Software developer with 5 years of experience'
  };

  countries = ['USA', 'Canada', 'UK', 'Germany', 'France', 'Japan'];
  selectedCountry: string = 'USA';

  // Example 2: Shopping Cart
  products = [
    { id: 1, name: 'Laptop', price: 999, quantity: 1, inStock: true },
    { id: 2, name: 'Mouse', price: 25, quantity: 2, inStock: true },
    { id: 3, name: 'Keyboard', price: 75, quantity: 1, inStock: false },
    { id: 4, name: 'Monitor', price: 300, quantity: 1, inStock: true }
  ];

  cartTotal: number = 0;
  discountCode: string = '';
  discountApplied: boolean = false;
  finalTotal: number = 0;

  // Computed properties
  get totalItems(): number {
    return this.products.reduce((sum, product) => sum + product.quantity, 0);
  }

  get inStockItems(): number {
    return this.products.filter(product => product.inStock).length;
  }

  get outOfStockItems(): number {
    return this.products.filter(product => !product.inStock).length;
  }

  // Methods
  updateUserProfile() {
    console.log('User profile updated:', this.user);
  }

  calculateTotal() {
    this.cartTotal = this.products.reduce((sum, product) => {
      return sum + (product.price * product.quantity);
    }, 0);
    this.finalTotal = this.discountApplied ? this.cartTotal * 0.9 : this.cartTotal;
  }

  applyDiscount() {
    if (this.discountCode.toLowerCase() === 'save10') {
      this.discountApplied = true;
      this.calculateTotal();
      console.log('Discount applied! 10% off');
    } else {
      this.discountApplied = false;
      this.calculateTotal();
      console.log('Invalid discount code');
    }
  }

  updateQuantity(productId: number, newQuantity: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.quantity = Math.max(0, newQuantity);
      this.calculateTotal();
    }
  }

  toggleProductStock(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.inStock = !product.inStock;
      this.calculateTotal();
    }
  }

  resetForm() {
    this.user = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
      isActive: true,
      country: 'USA',
      bio: 'Software developer with 5 years of experience'
    };
    this.selectedCountry = 'USA';
  }

  resetCart() {
    this.products.forEach(product => {
      product.quantity = 1;
      product.inStock = true;
    });
    this.discountCode = '';
    this.discountApplied = false;
    this.calculateTotal();
  }

  ngOnInit() {
    this.calculateTotal();
  }
}

