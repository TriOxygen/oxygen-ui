import Colors from './Colors';
import Units from './Units';
import Typography from './Typography';

class Theme {

  constructor(primary, secondary, tertiary, main = 'light') {
    this.setTheme(primary, secondary, tertiary, main);
  }

  setTheme(primary, secondary, tertiary, main) {
    const themeText = main === 'light' ? 'dark' : 'light';
    // this.primary1 = primary[500].hex;
    // this.primary1Text = primary[500].text.default;
    // this.primary2 = primary[700].hex;
    // this.primary2Text = primary[700].text.default;
    // this.primary3 = primary[100].hex;
    // this.primary3Text = primary[100].text.default;

    // this.secondary1 = secondary[500].hex;
    // this.secondary1Text = secondary[500].text.default;
    // this.secondary2 = secondary[700].hex;
    // this.secondary2Text = secondary[700].text.default;
    // this.secondary3 = secondary[100].hex;
    // this.secondary3Text = secondary[100].text.default;

    // this.tertiary1 = tertiary[600].hex;
    // this.tertiary1Text = tertiary[600].text.default;
    // this.tertiary2 = tertiary[800].hex;
    // this.tertiary2Text = tertiary[800].text.default;
    // this.tertiary3 = tertiary[300].hex;
    // this.tertiary3Text = tertiary[300].text.default;

    this.primary = primary;
    this.secondary = secondary;
    this.tertiary = tertiary;
    this.shade = main;

    this.theme = Colors.theme[main];
    this.alternate = Colors.theme[themeText]
    this.alternateText = Colors.text[main]
    this.text = Colors.text[themeText];
    this.button = Colors.button[main];
    this.units = Units.phone;
    this.typography = Typography;

    this.colors = Colors.material;

  }
}

export default Theme;
