import { data } from "../../data/data.js";

const d = document;
const grid = d.querySelector(".grid");

export function PaidOrderComponent(data) {
  return data.map((componentInfo) => {
    const { icon, paidOrder, title } = componentInfo;

    return `
      <div>
        <article>
                ${icon}
            <ul class="info">
                <li>
                    ${paidOrder}
                <li/>
                <li>
                    ${title}
                <li/>
            <ul/>
            
        </article>
      </div>
    `;
  }).join('');
}

grid.innerHTML = PaidOrderComponent(data);
