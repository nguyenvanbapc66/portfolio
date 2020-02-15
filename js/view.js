const view = {
    currentComponent: null
}

view.showComponent = (name) => {
    view.currentComponent = name
    switch(name){
        case 'portfolio': {
            let app = document.getElementById('app')
            app.innerHTML = component.portfolio
        }
    }
}