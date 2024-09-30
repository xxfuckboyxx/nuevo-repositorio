import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Componentes } from 'src/app/models/componentes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA (TIPO: ARRAY)
  public info: Componentes[];

  constructor() {
    this.info = [
      {
        id: "",
        nombre: "i3 7100",
        imagen: "https://www.bing.com/images/blob?bcid=snHgVJOHgZEHtg",
        precio: 90000,
        descripcion: "Intel i3-7100 Frecuencia del procesador: 3,9 GHz. Memoria interna máxima soportada por procesador: 64 GB Tipos de memoria admitidos del procesador: DDR3L-SDRAM, DDR4-SDRAM. Modelo del adaptador gráfico a bordo: Intel HD Graphics 630 Frecuencia de reloj básico de la tarjeta gráfica integrada: 350 MHz. Frecuencia dinámica (máx.) de la tarjeta gráfica integrada: 1100 MHz. Funda térmica (TDP). Potencia de diseño térmico: 51 W.",
        categoria: "procesador",
        alt: "procesador i3 7100"
      },
      {
        id: "",
        nombre: "Kingston FURY Beast 8GB 3200MHz DDR4",
        imagen: "https://www.bing.com/images/blob?bcid=skcGq4TDg5EHSQ",
        precio: 20000,
        descripcion: "La Kingston FURY Beast DDR4 impulsa enormemente el rendimiento de juegos, edición de vídeo y renderización con velocidades de hasta 3733 MT/s¹. Esta económica actualización está disponible en velocidades de 2666 MHz–3733 MT/s, latencias de CL15–19, capacidades de módulo único de 4 GB-32 GB y capacidades de kit de 8 GB-128 GB. Cuenta con overclocking automático de Plug N Play a velocidades de 2666 MT/s¹ y es compatible con Intel XMP y AMD Ryzen. FURY Beast DDR4 se mantiene refrigerada gracias a su disipador de calor elegante y de bajo perfil. Totalmente probada a altas velocidades, se trata de una actualización sencilla y práctica para tu sistema Intel o AMD.",
        categoria: "RAM",
        alt: "RAM Kingston FURY Beast 8GB 3200MHz DDR4"
      },
      {
        id: "",
        nombre: "GIGABYTE Placa Base A520M K V2 - Compatible con CPUs AMD Ryzen Serie 5000 AM4, hasta 5100MHz DDR4 (OC), PCIe Gen3 x4 M.2, LAN GbE, USB 3.2 Gen 1",
        imagen: "https://m.media-amazon.com/images/I/8167DVOm0ZL._AC_SX679_.jpg",
        precio: 59000,
        descripcion: "Compatible con procesadores AMD Ryzen 5000 Series/ Ryzen 5000 G-Series/ Ryzen 4000 G-Series y Ryzen 3000 y Ryzen 3000 G-Series DDR4 ECC/ No ECC sin búfer de doble canal, 2 DIMMs PCIe Gen3 x4 M.2 con soporte de modo PCIe NVMe y SATA LAN GbE con Gestión de Ancho de Banda Audio HD de 8 canales con capacitores de audio de alta calidad HDMI trasero y D-sub para soporte de múltiples pantallas Funciones Smart Fan 5 con múltiples sensores de temperatura, encabezados de ventilador híbridos con FAN STOP GIGABYTE APP Center, fácil y sencillo de usar",
        categoria: "motherboard",
        alt: "motherboard GIGABYTE Placa Base A520M K V2"
      }
    ]
  }
}
