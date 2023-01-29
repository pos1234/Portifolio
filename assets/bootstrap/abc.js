let light=document.getElementById('light');
let ilight=document.getElementById('ilight');
let root=document.querySelector(':root');
let mybutton=document.getElementById('backtop');
let navbar=document.getElementById('navbar');
let port=document.getElementById('port');
let pro=document.getElementById('pro');
let lan=document.getElementById('lan');
let mic=document.getElementById('mic');
let program=document.getElementById('program');
let lang=document.getElementById('lang');
let micro=document.getElementById('micro');
let navbarToggler=document.getElementById('navbar-toggler');
let first_image = $('#first-image');
let second_image = $('#second-image');
let third_image = $('#third-image');
let fourth_image = $('#fourth-image');
navbarToggler.addEventListener('click',()=>{
    navbarToggler.classList.toggle('toggler-icon-ex');
})
pro.addEventListener('click',()=>{
    pro.classList.add('active');
    lan.classList.remove('active');
    mic.classList.remove('active');
    program.classList.remove('not-active');
    lang.classList.add('not-active');
    micro.classList.add('not-active');
});
lan.addEventListener('click',()=>{
    pro.classList.remove('active');
    lan.classList.add('active');
    mic.classList.remove('active');
    program.classList.add('not-active');
    lang.classList.remove('not-active');
    micro.classList.add('not-active');
});
mic.addEventListener('click',()=>{
    pro.classList.remove('active');
    lan.classList.remove('active');
    mic.classList.add('active');
    program.classList.add('not-active');
    lang.classList.add('not-active');
    micro.classList.remove('not-active');
});
light.addEventListener('click',()=>{
    if(root.style.getPropertyValue('--primary')=='#f6f6f6'){
    root.style.setProperty('--primary','#4a4b4f');
    root.style.setProperty('--second','#404041');
    root.style.setProperty('--text','#edeef2');
    root.style.setProperty('--main',"#ffd841");
    ilight.classList.remove('fa-sun');
    light.classList.add('dark-animation');
    ilight.classList.add('fa-moon');
    setTimeout(take,1000);

}else{
    root.style.setProperty('--primary','#f6f6f6');
    root.style.setProperty('--second','#e5e2db')
    root.style.setProperty('--text','#111');
    root.style.setProperty('--main','#ff9a0d');
    ilight.classList.remove('fa-moon');
    light.classList.add('dark-animation');
    ilight.classList.add('fa-sun');
    setTimeout(take,1000);
}
});
let take= ()=>{
    light.classList.remove('dark-animation');
}
window.onscroll = ()=>{
    scrollback()
};
let scrollback = ()=>{
if(document.body.scrollTop>550||document.documentElement.scrollTop>550){
    mybutton.style.display='block';
    navbar.classList.remove('sticky-top');
}else{
    mybutton.style.display='none';
    navbar.classList.add('sticky-top');
}
}
mybutton.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});