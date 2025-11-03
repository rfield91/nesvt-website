import { Page } from "../components/page"


export function Events() {
    const events = [

    ];

    return <Page>
        <div className="mt-10 mx-auto w-3/4 text-center">
            {events.length > 0
                ? <div></div>
                : <div>No upcoming events. Check back soon.</div>}
        </div>
    </Page>
}
