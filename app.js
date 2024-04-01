window.addEventListener("mousemove",
    function(details){
        console.log(details.clientX)

        var xval = gsap.utils.mapRange(0, window.innerWidth, 100, window.innerWidth-100, details.clientX)

        gsap.to('#rect',{
            left: xval + 'px',
            top: details.clientY+ 'px',
            ease: Power3,
        });
     });

     