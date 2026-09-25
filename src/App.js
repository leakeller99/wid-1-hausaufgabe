import "./styles.css";

export default function App() {
  return (
    <div className="App">

      {/* Überschrift a*/}
      <h1 className="titel">Fachhochschule Nordwestschweiz</h1>

      {/* Container Text und Box */}
      <div className="container">
        {/* Einleitung */}
        <div className="text-spalte">
          <p>
            Die <b>Fachhochschule Nordwestschweiz</b> (FHNW) ist eine <a href="https://de.wikipedia.org/wiki/Fachhochschule" target="_blank">
            Fachhochschule </a> in der Schweiz und ist in der Lehre, Forschung,
            Weiterbildung und Dienstleistung tätig. Sie ist eine interkantonale 
            öffentlich-rechtliche Anstalt mit eigener Rechtpersönlichekeit. Träger 
            sind die Kantone <b>Aargau</b>, <b>Basel-Landschaft</b>, <b>Basel-Stadt</b> und
             <b>Solothurn</b>. Die FHNW umfasst folgende zehn Hochschulen, die auf 
            die Standorte <b>Basel</b>, <b>Brugg-Windisch</b>, <b>Muttenz</b> und <b>Olten
            </b> konzentriert sind: Angewandte Psychologie, 
            Architektur, Bau und Geomatik, Gestaltung und Kunst, Informatik, Life Sciences, 
            Musik, Lehrerinnen- und Lehrerbildung, Soziale Arbeit, Technik und Umwelt 
            sowie Wirtschaft. Der Hauptsitz ist in <b>Windisch</b>.
          </p>

          {/* Unterkapitel */}
          <h2 className="unter-titel">Leistungsauftrag</h2>
          <p>
            Im Rahmen des Staatsvertrags zwischen den Kantonen Aargau, Basel-Landschaft, 
            Basel-Stadt und Solothurn führen die Trägerkantone die FHNW mit einem vierfachen 
            Leistungsauftrag. Dieser beinhaltet die Aus- und Weiterbildung, anwendungsorientierte 
            Forschung und Entwicklung sowie Dienstleistungen zugunsten Dritter. Ein Anliegen ist 
            der Arbeitsmarkterfolg der Absolventen. Ein Schwerpunkt liegt auf der interdisziplinären 
            Bearbeitung von gesellschaftlichen Themen und Herausforderungen wie der Zukunft der Arbeit 
            («New Work»), des Gesundheitswesens («Future Health») und der Wandel zu einer 
            emissionsarmen Wirtschaft und Gesellschaft («Zero Emission»).
          </p>
        </div>

        {/* Text rechts (mit Box) */}
        <div className="box-spalte">
          <div className="box">
            <h3 className="box-titel">Fachhochschule Nordwestschweiz</h3>

            {/* Bild FHNW */}
            <div className="bild">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/FHNW_Logo.svg/1920px-FHNW_Logo.svg.png?utm_source=de.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
                alt="Logo FHNW"
                width="250"
              />
            </div>

            {/* Flexbox */}
            <div className="zeile">
              <div className="links">Gründung</div>
              <div className="rechts">1. Januar 2006</div>
            </div>
            <div className="zeile">
              <div className="links">Trägerschaft</div>
              <div className="rechts">
                Kantone Aargau, Basel-Landschaft, Basel-Stadt, Solothurn
              </div>
            </div>            
            <div className="zeile">
              <div className="links">Ort</div>
              <div className="rechts"> Windisch AG, Muttenz, Olten, Basel</div>
            </div>
            <div className="zeile">
              <div className="links">Land</div>
              <div className="rechts">Schweiz</div>
            </div>
            <div className="zeile">
              <div className="links">Direktionspräsident</div>
              <div className="rechts">Crispino Bergamaschi</div>
            </div>
            <div className="zeile">
              <div className="links">Studierende</div>
              <div className="rechts">14'527 (2025)</div>
            </div>
            <div className="zeile">
              <div className="links">Mitarbeitende</div>
              <div className="rechts">3282 (2025)</div>
            </div>
            <div className="zeile">
              <div className="links">davon Professor*innen</div>
              <div className="rechts">536 (2025)</div>
            </div>
            <div className="zeile">
              <div className="links">Jahresetat</div>
              <div className="rechts">CHF 526 Mio. (2025)</div>
            </div>
            <div className="zeile">
              <div className="links">Netzwerke</div>
              <div className="rechts">Swissuniversities, 
                TriRhenaTech, EUA, CallengeEU</div>
            </div>
            <div className="zeile">
              <div className="links">Website</div>
              <div className="rechts">
                <a href="https://www.fhnw.ch" target="_blank">
                  www.fhnw.ch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}