function scrollUp()
    {
        var element = document.documentElement.scrollTop;
        // position: relative; width: 70%; left: 15%;
        if(element > 100) {
            document.querySelector("header .res-header").style.backgroundColor='rgba(34, 40, 53, 0.8)';
            document.querySelector("#logo").style.transform="translateY(-60px)";
            // document.querySelector('header .res-header').classList.toggle("fadeIn");
            document.querySelector('#mainHeader').style.backgroundColor='rgba(0,0,0,0)';
            document.querySelector('.res-header #item1').style.transform='translateY(0px)';
            document.querySelector('.res-header #item2').style.transform='translateY(0px)';

            document.querySelector('#largeLogin').
                style.position='relative';
            document.querySelector('#largeLogin').
                style.width='70%';
            document.querySelector('#largeLogin').
                style.left='15%';
            document.querySelector("header .res-header").style.transitionDelay="0.2";

        }
        else
        {
            document.querySelector("header .res-header").stylebackgroundColor='rgba(34, 40, 53, 0)';
            document.querySelector("header .res-header").style.transitionDelay="0.1";
            document.querySelector("#logo").style.transform="translateY(-0px)";
            document.querySelector('#mainHeader').style.opacity='1';
            document.querySelector('#mainHeader').style.backgroundColor='rgba(34, 40, 53, 1)';
            document.querySelector('.res-header #item1').style.transform='translateY(-50px)';
            document.querySelector('.res-header #item2').style.transform='translateY(-60px)';
            document.querySelector('#largeLogin').
                style.width='100%';
            document.querySelector('#largeLogin').
                style.left='0%';
        }
    }




