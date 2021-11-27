
export class UI{
    
    static loadPage(){
        
    }

    static loadButtons(){
        const btnNav = document.getElementById('btnNav');
        const nav = document.querySelector('.sideBar');
        btnNav.addEventListener('click', () =>{
            const currentValue = nav.style.getPropertyValue('--divDisplay');
            if(currentValue == 'none'){
                nav.style.setProperty('--divDisplay', 'block');
            }
            else{
                nav.style.setProperty('--divDisplay', 'none');
            }
        });
    }
}