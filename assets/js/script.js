/////////////////////////////////////////////////////////
// Helpers
/////////////////////////////////////////////////////////
const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);

///////////////////////////////
// Tooltip class
///////////////////////////////
class tooltip
{
    constructor (el)
    {
        this.element= el
    }
//     get tooltipHTML()
//     {
//         const that = this.element,
//             title = that.getAttribute('data-tooltip'),
//             tooltipHTML = document.createElement('div'),
//             titleHTML = '<span class="tooltiptext">' + title + '</span>';
// return titleHTML
//     }
};




window.onmousemove = (e) =>
  $$('[data-tooltip]').forEach((s) => {
    // Set tooltip
    s.onmouseenter = (e) => {
      const that = s,
        title = that.getAttribute('data-tooltip'),
        tooltipHTML = document.createElement('div'),
        titleHTML = '<span class="tooltiptext">' + title + '</span>',
        hoverPos = parseInt(e.pageX),
        hoverLeft = hoverPos < 10,
        hoverRight = window.innerWidth - hoverPos < 100,
        extraXSpaces = hoverLeft ? 10 : hoverRight ? -10 : 0;

      // Added HTML
      tooltipHTML.classList.add('tooltip');
      tooltipHTML.innerHTML = titleHTML;

      // Append to Body
      document.body.appendChild(tooltipHTML);

      //Add position
      tooltipHTML.style.left =
        e.pageX + extraXSpaces - tooltipHTML.offsetWidth / 2 + 'px';
      tooltipHTML.style.top = e.pageY - 43 + 'px';
    };
    // Remove Tooltips
    s.onmouseleave = (e) => {
      $$('.tooltip').forEach((f) => f.remove());
    };
  });
