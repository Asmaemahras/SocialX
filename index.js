const menuItems = document.querySelectorAll('menu-item');
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active'); 
    });
}


// THEME DISPLAY

// THEME 
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.cust-theme');
// font size
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
// open model

const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
//closes model
const closeThemeModel = (e) => {
    if(e.target.classList.contains('cust-theme')){
        themeModel.style.display = 'none';
    }
}
//close model
themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);
//remove active class 
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    }
    )
}

// FONTS

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font-size2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7em');
        }
        else if(size.classList.contains('font-size3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font-size4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }
   
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// Changer les couleurs 
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

const colorPalette = document.querySelectorAll('.choose-color span');
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryhue = 226;
        }else if(color.classList.contains('color-2')){
            primaryhue = 52;
        }else if(color.classList.contains('color-3')){
            primaryhue = 352;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryhue);
    })
})
// BG 

const Bg1 = document.querySelector('.bg1');
const Bg2 = document.querySelector('.bg2');
const Bg3 = document.querySelector('.bg3');

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});