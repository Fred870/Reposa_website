import React from 'react';

const ResearchPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Sleep Position & Respiratory Health Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Sleep Position &amp; Respiratory Health</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11277951/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2024 Systematic Review
            </a> – Positional therapy techniques (e.g. specialized pillows or vibration alarms) were shown to reduce snoring by increasing the airway’s cross-sectional area and decreasing airway closing pressure [oai_citation_attribution:0‡pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11277951/#:~:text=facilitate%20PT%2C%20including%20anti,needed%20to%20enhance%20snoring%20management).
          </li>
          <li>
            <a href="http://sleepmedres.org/upload/pdf/smr-2022-01312.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2022 Case Study
            </a> – An OSA patient who slept upright (in a seated position) experienced virtually no apneas while sitting. Researchers found that sleeping seated opened the patient’s upper airway (greater pharyngeal area, less collapse) compared to lying flat, leading to a marked drop in breathing events [oai_citation_attribution:1‡sleepmedres.org](http://sleepmedres.org/journal/view.php?doi=10.17241/smr.2022.01312#:~:text=Postural%20changes%20from%20supine%20to,breathing%20events%20decrease%20in%20a) [oai_citation_attribution:2‡sleepmedres.org](http://sleepmedres.org/journal/view.php?doi=10.17241/smr.2022.01312#:~:text=,effects%20have%20focused%20on%20a).
          </li>
          <li>
            <a href="https://www.sleepfoundation.org/sleep-apnea/does-sleeping-sitting-upright-help-sleep-apnea" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2023 Sleep Foundation Overview
            </a> – Summarizes that sleeping on one’s side or upright can alleviate breathing problems for many people with sleep apnea. In positional OSA (where apnea is worst on the back), avoiding the supine position often raises blood oxygen levels and reduces snoring and apnea severity [oai_citation_attribution:3‡sleepfoundation.org](https://www.sleepfoundation.org/sleep-apnea/does-sleeping-sitting-upright-help-sleep-apnea#:~:text=advances%20science%20and%20health%20by,and%20reduce%20breathing%20issues).
          </li>
        </ul>
      </div>

      {/* Positional Therapy Efficacy Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Positional Therapy Efficacy</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/31041813/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2019 Cochrane Review
            </a> – Positional therapy significantly decreased sleep apnea severity (AHI) and daytime sleepiness compared to no treatment [oai_citation_attribution:4‡aafp.org](https://www.aafp.org/pubs/afp/issues/2020/0101/p16.html#:~:text=Positional%20therapy%20for%20OSA%20reduces,oriented%20evidence). While CPAP therapy reduced AHI about 6.4 events/hour more than positional devices on average, patients kept positional therapy devices on ~2.5 hours longer per night, resulting in similar improvements in sleep quality and symptoms as CPAP over short-term trials [oai_citation_attribution:5‡aafp.org](https://www.aafp.org/pubs/afp/issues/2020/0101/p16.html#:~:text=CPAP%20reduced%20AHI%20scores%20compared,between%20CPAP%20and%20positional%20therapy).
          </li>
          <li>
            <a href="https://jcsm.aasm.org/doi/10.5664/jcsm.7868" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2019 RCT (NightBalance vs CPAP)
            </a> – In a randomized crossover trial with positional OSA patients, a vibratory positional trainer (NightBalance Sleep Position Trainer) was nearly as effective as auto-CPAP. The positional device kept average AHI to ~7 events/hour vs ~3.7 with CPAP, and it showed significantly better adherence (users wore it longer) [oai_citation_attribution:6‡pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/31383231/#:~:text=%28mean%20%C2%B1%20standard%20deviation%2C%207,both%20devices%20were%20equally%20effective). Over half the patients found the vibrating trainer more comfortable and preferred it to CPAP, confirming higher long-term tolerability [oai_citation_attribution:7‡pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/31383231/#:~:text=SPT%20%28345,both%20devices%20were%20equally%20effective).
          </li>
          <li>
            <a href="https://www.frontiersin.org/articles/10.3389/fmed.2025.1517274/full" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2025 Meta-Analysis
            </a> – A meta-analysis of 19 studies concluded that positional therapy is a generally safe and effective alternative for positional OSA, especially for those who cannot tolerate CPAP [oai_citation_attribution:8‡frontiersin.org](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1517274/pdf#:~:text=Results%3A%20Sleep%20positional%20therapy%20,oxygen%20saturation%20parameters%20across%20comparisons). However, it remains less effective than CPAP in reducing overall apnea severity and improving oxygen saturation, reinforcing that CPAP achieves greater reductions in AHI and hypoxia in most patients [oai_citation_attribution:9‡frontiersin.org](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1517274/pdf#:~:text=Conclusion%3A%20Sleep%20positional%20therapy%20,overall%20AHI%20and%20improving%20oxygenation).
          </li>
        </ul>
      </div>

      {/* Smartphone and Wearable-Based Position Training Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Smartphone and Wearable-Based Position Training</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <a href="https://www.mdpi.com/1424-8220/21/13/4531" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2021 Smartphone App Study
            </a> – Demonstrated a smartphone application (“SleepPos” for Android) that uses the phone’s sensors to monitor sleep posture and gently alert the user to change position. In home trials, the app reliably tracked sleep positions and successfully prevented prolonged supine sleep, even identifying when oxygen desaturation events occurred more often on the back [oai_citation_attribution:10‡mdpi.com](https://www.mdpi.com/1424-8220/21/13/4531#:~:text=Android%20smartphone%20application%20,smartphones%20are%20capable%20of%20reliably) [oai_citation_attribution:11‡mdpi.com](https://www.mdpi.com/1424-8220/21/13/4531#:~:text=occurrence%20of%20desaturation%20events,position%20and%20provide%20useful%20clinical).
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/35210182/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2022 mHealth Tech Review
            </a> – A systematic review of mobile apps and wearable devices for sleep apnea found about 10 smartphone apps that can aid in monitoring or treating sleep-disordered breathing [oai_citation_attribution:12‡pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9801062/#:~:text=). The review noted that these emerging technologies (including position-monitoring apps and vibratory wearables) hold great promise for managing positional sleep apnea at home, though most are still in early stages and require further clinical validation [oai_citation_attribution:13‡pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9801062/#:~:text=Ten%20smartphone%20apps%20met%20the,inclusion%20criteria).
          </li>
          <li>
            <a href="https://thorax.bmj.com/content/78/11/1126" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2023 Wearable Device Analysis
            </a> – Focused on “vibrotactile” positional therapy devices (wearables that vibrate to prompt side-sleeping). It found that these smart devices significantly reduced the time patients spent sleeping on their back and lowered the severity of OSA events [oai_citation_attribution:14‡pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10715547/#:~:text=WHAT%20THIS%20STUDY%20ADDS). Improvements in daytime sleepiness and sleep quality were minimal but trending positive, indicating the devices are effective without greatly disrupting comfort or sleep architecture [oai_citation_attribution:15‡pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10715547/#:~:text=,reach%20a%20clinically%20meaningful%20difference).
          </li>
        </ul>
      </div>

      {/* Long-Term Benefits of Position Training Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Long-Term Benefits of Position Training</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <a href="https://academic.oup.com/sleep/article/37/7/1209/2558967" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2014 – 6-Month SPT Trial
            </a> – In a 6-month study of patients with positional OSA, nightly use of a Sleep Position Trainer (a wearable vibratory device) led to a near elimination of supine sleep time (from 21% of the night at baseline to just 3% at 6 months) [oai_citation_attribution:16‡pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC4098806/#:~:text=total%20avoidance%20of%20supine%20sleep,significantly%20improved%20compared%20with%20baseline). Participants also showed significant improvements in subjective sleep quality and daytime alertness (e.g., lower Epworth Sleepiness scores), as well as higher functional sleep scores, indicating better long-term sleep health with consistent positional therapy [oai_citation_attribution:17‡pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC4098806/#:~:text=Positional%20therapy%20using%20the%20Sleep,limited%20the%20efficacy%20of%20conclusions).
          </li>
          <li>
            <a href="https://link.springer.com/article/10.1007/s11325-017-1582-9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              2017 – 12-Month RCT
            </a> – Over a 12-month period, a positional therapy device (the SPT chest wearable) was compared to an oral appliance for treating mild-moderate positional OSA. The year-long randomized trial found both treatments produced equally significant reductions in apnea severity, but the positional trainer resulted in fewer side effects and was rated easier to use, leading to high adherence and maintained benefits at one year [oai_citation_attribution:18‡sleepreviewmag.com](https://sleepreviewmag.com/sleep-disorders/breathing-disorders/obstructive-sleep-apnea/nightbalance-compares-favorably-oral-appliance-therapy-long-term-study-treating-positional-sleep-apnea/#:~:text=NightBalance%20announced%20the%20publication%20of,and%20showed%20fewer%20side%20effects) [oai_citation_attribution:19‡sleepreviewmag.com](https://sleepreviewmag.com/sleep-disorders/breathing-disorders/obstructive-sleep-apnea/nightbalance-compares-favorably-oral-appliance-therapy-long-term-study-treating-positional-sleep-apnea/#:~:text=NightBalance%E2%80%99s%20SPT%20is%20worn%20in,therapy%20adherence%20and%20patient%20comfort).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResearchPage;