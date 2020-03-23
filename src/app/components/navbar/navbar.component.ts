import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  currentLanguage;
  languageList = [
    {display: "EN", code: "en"},
    {display: "FR", code: "fr"},
  ]
  ngOnInit(): void {
    this.currentLanguage = this.languageList.find(x => x.code === this.translate.getDefaultLang()).display;
  }

  changeLanguage(langCode) {
      this.translate.setDefaultLang(langCode);
      this.currentLanguage = this.languageList.find(x => x.code === langCode).display;
  }
}
