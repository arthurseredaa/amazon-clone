import React from "react";
import s from "./ProductsHolder.module.css";
import { Product } from "../../molecules/Product/Product";

export const ProductsHolder = ({ onAddToCart }) => {
  return (
    <div className={s.productsHolder}>
      <div className={s.productsHolderRow}>
        <Product
          id={1}
          title={"Морозильная камера Liebherr GNP 2303"}
          image={
            "https://i2.rozetka.ua/goods/1738421/6553738_images_1738421437.jpg"
          }
          price={"12 999"}
          rating={3}
          onAddToCart={onAddToCart}
        />
        <Product
          id={2}
          title={
            "Зонт пляжный с наклоном Kodor 2.0 Anti-UV Ultramarine Blue (ЗП200синий)"
          }
          image={
            "https://i8.rozetka.ua/goods/18915436/kodor_zp200sinij_images_18915436447.jpg"
          }
          price={"252"}
          rating={5}
          onAddToCart={onAddToCart}
        />
        <Product
          id={3}
          title={"Наушники Sony WH-CH510 White"}
          image={
            "https://i8.rozetka.ua/goods/14200977/sony_whch510w_ce7_images_14200977668.jpg"
          }
          price={"1 299"}
          rating={4}
          onAddToCart={onAddToCart}
        />
      </div>
      <div className={s.productsHolderRow}>
        <Product
          id={4}
          title={
            "Велосипед Formula Drive AM 14G DD 19' 29' AL 2020 Черно-белый (м) (RET-FR-29-003)"
          }
          image={
            "https://i2.rozetka.ua/goods/18347444/formula_ret_fr_29_003_images_18347444155.jpg"
          }
          price={"5 936"}
          rating={3}
          onAddToCart={onAddToCart}
        />

        <Product
          id={5}
          title={
            "Мини кондиционер охладитель увлажнитель очиститель воздуха с LED подсветкой 3 в 1 Arctic Air Ultra для комнаты переносной Белый"
          }
          image={
            "https://i8.rozetka.ua/goods/18245007/213638581_images_18245007823.jpg"
          }
          price={"595"}
          rating={5}
          onAddToCart={onAddToCart}
        />
      </div>
      <div className={s.productsHolderRow}>
        <Product
          id={5}
          title={
            "Ноутбук Asus VivoBook S15 M533IA-BQ090 (90NB0RF3-M02560) Indie Black"
          }
          image={
            "https://i2.rozetka.ua/goods/18920431/asus_90nb0rf3_m02560_images_18920431501.jpg"
          }
          price={"20 999"}
          rating={5}
          onAddToCart={onAddToCart}
        />
        <Product
          id={6}
          title={"Телевизор Samsung UE43NU7090UXUA"}
          image={
            "https://i8.rozetka.ua/goods/18912557/samsung_ue43nu7090uxua_images_18912557923.jpg"
          }
          price={"9 999"}
          rating={2}
          onAddToCart={onAddToCart}
        />{" "}
        <Product
          id={7}
          title={
            "Беспроводное автомобильное зарядное устройство Xiaomi MI QI Car Wireless Charger WCJ02ZM (GDS4108CN)"
          }
          image={
            "https://i8.rozetka.ua/goods/18371435/xiaomi_gds4108cn_images_18371435017.jpg"
          }
          price={"1 199"}
          rating={5}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
};
