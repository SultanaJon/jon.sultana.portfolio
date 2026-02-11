import { useEffect, useState } from "react"


export default function Panel() {
    const [command, setCommand] = useState(``)
    const [displayBuildInfo, setDisplayBuildInfo] = useState<boolean>(false)
    const [displayServerInfo, setDisplayServerInfo] = useState<boolean>(false)

    useEffect(() => {
        // start typing after two seconds.
        setTimeout(typeAndRunCommand, 2000);
    }, [])

    const typeAndRunCommand = () => {
        let currentIndex = 0
        const commandText = "dotnet run"

        // every two seconds type a character.
        const intervalId = setInterval(() => {
            if (currentIndex < commandText.length) {
                let current = commandText.slice(0, currentIndex + 1)
                setCommand(current);
                currentIndex++;
            } else {
                clearInterval(intervalId)
                // start the buld
                setTimeout(startBuild, 1000)
            }
        }, 200)
    }

    const startBuild = () => {
        setDisplayBuildInfo(true)

        // start the server
        setTimeout(() => setDisplayServerInfo(true), 1000)
    }

    const getBuildResults = () => {
        return (
            <div>
                {displayBuildInfo && (
                    <>
                        <div>Using launch settings from C:\Users\jonsu\Projects\portfolio-api\Properties\launchSettings.json...</div>
                        <div>Building...</div>
                    </>
                )}
                {displayServerInfo && (
                    <>
                        <div><span>info</span>: Microsoft.Hosting.Lifetime[14]</div>
                        <div>        Now listening on: http://localhost:5186</div>
                        <div><span>info</span>: Microsoft.Hosting.Lifetime[0]</div>
                        <div>        Application started. Press Ctrl+C to shut down.</div>
                        <div><span>info</span>: Microsoft.Hosting.Lifetime[0]</div>
                        <div>        Hosting environment: Development</div>
                        <div><span>info</span>: Microsoft.Hosting.Lifetime[0]</div>
                        <div>        Content root path: C:\Users\jonsu\Projects\porfolio-api</div>
                    </>
                )}
            </div>
        )
    }

    return (
        <div className="h-[300px] max-h-[300px] overflow-auto">
            <div className='flex font-sm gap-[1rem] items-center p-3'>
                <span>PROBLEMS</span>
                <span>OUTPUT</span>
                <span>DEBUG CONSOLE</span>
                <span className='text-white border-b border-white'>TERMINAL</span>
                <span>PORTS</span>
            </div>
            <div className='h-[150px] px-[1rem] whitespace-pre'>
                <div><span>$ {command}</span></div>
                {getBuildResults()}
            </div>
        </div>
    )
}