export const TextHistoryService = {
    waitingText: [],
    displayInterval: null,
    html: "",
    newText: false,
    addText: (text, type = 'narator', name = "Héro") => {
        let html = ""
        if (type == 'narator') {
            html = `<div class="message message-narator">
                        <p>${text}</p>
                    </div>`
        } else {
            html = `<div class="message message-${type}">
                        <span class="protagonist">${name}: </span>
                        <p>${text}</p>
                    </div>`
        }
        TextHistoryService.html += html;
        TextHistoryService.newText = true;
    },
    addTextAsync: (text, type = 'narator', name = 'Héro') => {
        const textExtended = {
            text: text,
            type: type,
            name: name,
        }
        TextHistoryService.waitingText.push(textExtended);

        if (!TextHistoryService.displayInterval) {
            TextHistoryService.displayInterval = setInterval(() => {
                if (TextHistoryService.waitingText.length > 0) {
                    let dialog = TextHistoryService.waitingText.shift();
                    TextHistoryService.addText(dialog.text, dialog.type, dialog.name);

                } else {
                    clearInterval(TextHistoryService.displayInterval);
                    TextHistoryService.displayInterval = null;
                }
            }, 1500);
        }
    }
}