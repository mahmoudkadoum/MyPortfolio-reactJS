
// Function to huo illustration img And BGs color
function HuoImgByMainColor(theColor) {
let filter = '';
    switch(theColor) {
        case '#03A9F4':
            filter  = 'hue-rotate(200deg)';
            break;
        case '#E91E63':
            filter  = 'hue-rotate(345deg)';
            break;
        case '#ff00ff':
            filter  = 'hue-rotate(300deg)';
            break;
        case '#FF9800':
            filter  = 'hue-rotate(45deg)';
            break;
        case '#33b638':
            filter  = 'hue-rotate(120deg)';
            break;
        default:
            filter  = 'hue-rotate(200deg)';
      }
      return filter;
}
export default HuoImgByMainColor ;