import { data } from "../../data/data.js";

const d = document;
const grid = d.querySelector(".grid");

export function PaidOrderComponent(data) {
  return data.map((componentInfo, index) => {
    const { icon, paidOrder, title } = componentInfo;

    return `
      <div class="component" data-index="${index}">
        <article>
                ${icon}
            <ul class="info">
                <li>
                    ${paidOrder}
                <li/>
                <li class="title">
                    ${title}
                <li/>
            <ul/>
            
        </article>
      </div>
    `;
  }).join('');
}

grid.innerHTML = PaidOrderComponent(data);
