class CardComponent extends HTMLElement {
    constructor() {
        super();

        // Создаём Shadow DOM
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // Проверяем, создана ли карточка
        if (this.shadowRoot.childNodes.length > 0) {
            return;
        }

        // Получаем HTML-шаблон
        const template = document.getElementById("card-template");

        if (!template) {
            console.error("Шаблон card-template не найден!");
            return;
        }

        // Копируем шаблон
        const templateContent = template.content.cloneNode(true);

        // Создаём элемент style
        const style = document.createElement("style");

        // Добавляем CSS через JavaScript
        style.textContent = `
            .card {
                width: 300px;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
                overflow: hidden;
                transition: transform 0.3s, box-shadow 0.3s;
            }

            .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
            }

            .card-header {
                background-color: #70757a;
                color: white;
                padding: 15px;
            }

            .card-header h2 {
                margin: 0;
                font-size: 20px;
            }

            .card-content {
                padding: 15px;
                color: #333;
                line-height: 1.5;
            }

            .card-content img {
                display: block;
                object-fit: cover;
                boz-siszing: border-box;
                margin-top: 10px;
                border-radius: 5px;
            }
        `;

        // Добавляем стили в Shadow DOM
        this.shadowRoot.appendChild(style);

        // Добавляем содержимое шаблона
        this.shadowRoot.appendChild(templateContent);
    }
}

// Регистрируем компонент
customElements.define("card-component", CardComponent);