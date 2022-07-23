import Link from "next/link";
import { convertToPath } from "../lib/items";
import style from "../styles/product.module.css";
import { useAppContext } from "./stateWrapper";
import Image from "next/image";
import ButtonCart from "./buttonCart";

import { changeImg } from "../public/utils.js";

export default function Product({ item, qty = 0, showAs }) {
  if (showAs === "Page") {
    return (
      <div>
        <script src="/utils.js"></script>
        <div className={style.row1}>
          <div className={style.column1}>
            <img
              src="http://localhost:3000/img/for_boys/boys-3-1-580x870.jpg"
              alt="Nature"
              onclick="changeImg(this);"
            ></img>
          </div>
          <div className={style.column1}>
            <img
              src="http://localhost:3000/img/for_boys/boys-3-580x870(1).jpg"
              alt="Snow"
              onclick="changeImg(this);"
            ></img>
          </div>
          <div className={style.column1}>
            <img
              src="http://localhost:3000/img/for_boys/boys-3-580x870.jpg"
              alt="Mountains"
              onclick="changeImg(this);"
            ></img>
          </div>
          <div className={style.column1}>
            <img
              src="http://localhost:3000/img/for_boys/boys-3-580x870.jpg"
              alt="Lights"
              onclick="changeImg(this);"
            ></img>
          </div>
        </div>
        <div className={style.container1}>
          <span
            onclick="this.parentElement.style.display='none'"
            className={style.closebtn}
          >
            &times;
          </span>
          <img id="expandedImg" className={style.expimg}></img>
          <div id="imgtext"></div>
        </div>

        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={style.price}>${item.price}</div>
          <div>{item.description}</div>
          <div>
            <ButtonCart item={item} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image
            src={item.images.img1}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
        <div>
          <div>{item.title}</div>
          <div>${item.price}</div>
          {qty === 0 ? "" : <div>{qty} units</div>}

          {qty === 0 ? "" : <div>Subtotal: ${qty * item.price}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <a>
            <Image
              src={item.images.img1}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>
            <a>{item.title}</a>
          </Link>
        </h3>
      </div>
      <div>${item.price}</div>
      <div>
        <ButtonCart item={item} />
      </div>
    </div>
  );
}
