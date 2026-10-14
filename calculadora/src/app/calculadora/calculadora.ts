import { Component, signal, computed } from '@angular/core';

type Operacion = '+' | '-' | '×' | '÷';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  readonly a = signal(0);
  readonly b = signal(0);
  readonly operacion = signal<Operacion>('+');
  readonly operaciones: Operacion[] = ['+', '-', '×', '÷'];

  readonly resultado = computed(() => {
    const a = this.a();
    const b = this.b();

    switch (this.operacion()) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? null : a / b;
    }
  });

  actualizarA(valor: string) {
    this.a.set(Number(valor));
  }

  actualizarB(valor: string) {
    this.b.set(Number(valor));
  }

  elegir(op: Operacion) {
    this.operacion.set(op);
  }
}
