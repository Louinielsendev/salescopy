import Nav from '../Nav'
import Link from 'next/link'
export default function Om() {
    return [
        <div>
            <Nav />
            <div className='max-w-2xl mx-auto my-16 p-6'>
                <h1 className='font-bold text-xl mb-4'>Hur fungerar Salescopy.se?</h1>
                <p className='mb-16'>

                    Med Salescopy.se kan du skapa effektiva annonser på bara några minuter, utan att behöva anställa en professionell copywriter eller spendera timmar på att skriva och testa annonstexter.
                    <br />
                    <br />
                    Med hjälp av AI, autogenererar Salescopy.se annonstexter baserat på produkten. Autogenererade annonstexter är ett resultat av den ökade användningen av AI inom marknadsföring. Genom att använda data från tidigare kampanjer och transaktioner kan AI generera annonstexter som är optimerade för att öka konverteringar. Annonsens innehåll, rubrik, bilder och annat innehåll kan alla autogenereras av en algoritm som är tränad på tidigare data.
                    <br />
                    <br />
                    Fördelarna med autogenererade annonstexter är många. För det första kan de spara tid och pengar för marknadsförare genom att automatisera processen för att skapa annonser. För det andra kan de öka effektiviteten genom att optimera annonserna för högre konverteringar, vilket innebär att marknadsförare kan få mer avkastning på sina investeringar. Slutligen kan autogenererade annonstexter vara mycket mer relevanta och anpassade till kundernas intressen och beteenden, vilket kan öka chanserna att de klickar på annonsen och genomför en transaktion.
                    <br />
                    <br />
                    Slutligen är det viktigt att komma ihåg att autogenererade annonstexter inte är en lösning på alla problem inom marknadsföring. De kan vara ett kraftfullt verktyg, men de bör användas som en del av en större strategi som inkluderar mänsklig kreativitet, analys av data och en förståelse för kundens behov och beteenden.</p>
                    <div className='w-full flex justify-center'>
                    <Link href="/"><button className="w-40 bg-buttoncolor p-4 text-white text-xs rounded-full ">Skapa annons</button></Link>
                    </div>
                    
            </div>
        </div>
    ]
}