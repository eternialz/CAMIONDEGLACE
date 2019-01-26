export const TextHistoryService = {
    html: "",
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
    },
}