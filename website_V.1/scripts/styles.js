window.addEventListener('scroll', function() {
    //this.console.log(window.pageYOffset + 'px');
    this.console.log(window.pageYOffset);
    let navbar_height = document.getElementsByTagName('nav')[0].style.height;
    if (window.pageYOffset  == navbar_height/2 + '%') {
        document.getElementsByTagName('nav')[0].style.display = 'none';
        this.console.log("finished")
    }
  });