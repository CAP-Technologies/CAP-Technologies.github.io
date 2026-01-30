document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');

    function checkScroll() {
        for (var i = 0; i < boxes.length; i++) {
            var box = boxes[i];
            if (isElementInViewport(box) && !box.classList.contains('visible')) {
                box.classList.add('visible');
            }
        }
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll);
});

window.addEventListener("load", tip_setup);
function tip_setup() {
    tips=new Array();
    tips[0]="Always use dark mode.";
    tips[1]="Indent your code.";
    tips[2]="Turn on autofill for code.";
    tips[3]="Use a good editor that does what you need and nothing else.";
    tips[4]="Use Linux. Every time.";
    tips[5]="Python is for little bits, HTML is for websites, C++ is for everything.";
    tips[6]="Back EVERYTHING up.";
    tips[7]="Close whatever you're not using.";
    tips[8]="Keep software up to date on the most RELIABLE version, not the most recent.";
    tips[9]="Your data is precious. Watch who you give it to.";
    tips[10]="Keep your code simple and readable.";
    tips[11]="Arduino is the source of all simple real-life applications - use it.";
    tips[12]="If your code has bugs, then first do what you can to figure stuff out. Take a break. Then come back. If you can figure it out, than then, and only then, you ask people for help.";
    tips[13]="Think before you allow admin access.";
    tips[14]="Deleting something is not deleting it. It's simply moving it. If you want to delete something for good, press Shift-Delete. Or just get rid of the recycle bin.";
    tips[15]="If your problem is small, don't bother other people with your stupid questions. Figure it out yourself.";
    tips[16]="Use third-party software to configure Windows privacy settings. Else they'll just be back again after the next update.";
    tips[17]="Raspberry Pi is good for affordable computers. Think of that before opening your wallet too wide.";
    tips[18]="Before you pay for software, see if there's a free variant that does the same thing. Chances are there is.";
    tips[19]="Try to always use open-source.";
    var chosen_one=Math.floor(Math.random() * tips.length);
    document.getElementById('tip').innerHTML=tips[chosen_one];
}
