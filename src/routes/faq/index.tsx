import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import devens from '@/assets/devens.svg'

type ItemProps = {
  title: string
  children: ReactNode
}

const Item = ({ title, children }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-500 rounded shadow">
      <div
        className={`flex gap-2 p-2 cursor-pointer select-none ${isOpen ? 'border-b border-b-slate-500' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="w-3">{isOpen ? <>-</> : <>+</>}</div>
        <div>{title}</div>
      </div>
      <div className={`${isOpen ? '' : 'hidden'}`}>
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/faq/')({ component: Faq })

function Faq() {
  const items = [
    {
      title: 'What is Autocross?',
      content: (
        <div className="flex flex-col gap-4">
          <p>
            This video gives a very good over view of the sport of autocross and
            is about 9 minutes long.
          </p>
          <div className="mx-auto">
            <iframe
              src="https://player.vimeo.com/video/12067348"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            ></iframe>
          </div>
          <p>
            Part of what makes autocross so inexpensive is the shared work load.
            Each person is assigned a work station. You will most likely be
            assigned a station on the course where you will reset hit cones,
            call them in and flag cars in case of an issue. Each person works
            for one session and drives the other. We have 4 of these sessions
            and your participation in the working portion is vital to the
            operation of the event. If you do not show up to work your station
            then the event stops until we can find you or a replacement. This is
            the golden rule of autocross, you must work your assignment, leaving
            early without cause will ensure that you are not welcomed back at
            our or anyone else's events.
          </p>
        </div>
      ),
    },
    {
      title: 'Will my car pass tech?',
      content: (
        <>
          <ul className="list-disc list-inside">
            <li>Your car must be registered and insured.</li>
            <li>
              Check tires - Good condition, no exposed cords, cracks in
              sidewalls.
            </li>
            <li>Check wheel lugs for tightness, none missing.</li>
            <li>Hub caps / wheel / lug covers removed.</li>
            <li>Check wheel bearings for tightness.</li>
            <li>Check suspension for tightness.</li>
            <li>
              Check seat belts for good condition, lap belts minimum are
              required. Racing harness should be mounted properly.
            </li>
            <li>Check the battery mounting, must be mounted securely.</li>
            <li>Check overall for fluid leaks.</li>
            <li>
              Check that brake pedal is firm. Brake and clutch fluid levels are
              sufficient, no leaks.
            </li>
            <li>Check throttle return spring.</li>
            <li>
              Remove all loose items from interior, NO FLOOR MAT ON DRIVER SIDE.
            </li>
            <li>
              Remove all suction cup devices. i.e. radar detectors, gps
              receivers etc.
            </li>
            <li>
              Helmet must be of SNELL 2015 (M OR SA) standard or newer or FIA
              homologation.
            </li>
            <li>
              Car numbers (className is optional) must be on both sides of the
              car and readable from 25 feet.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Where do you race?',
      content: (
        <div className="flex flex-col gap-2">
          <p>
            A typical course layout is 1.8 Miles long at takes around 50 to 80
            seconds to complete.
          </p>
          <p>
            Autocross events are held at the old U.S. Army Moore Airfield at
            Fort Devens, located in Ayer, MA. a little north of Route 2 and West
            of Route 495. (92 Fitchburg Road, Ayer MA){' '}
          </p>
          <p>
            From Route 495: Take exit 30, route 2A and 110, West toward Ayer.
            Proceed 4 miles to rotary.
          </p>
          <p>
            From Route 2: Take exit 38B, route 110 and 111, North toward Ayer.
            Proceed 2 1/4 miles to rotary.
          </p>
          <p>
            Both directions converge at a Rotary in Ayer at the junctions of
            routes 110, 111, and 2A. There is a Ford dealer (Gervais), a
            Wendy's, and a McDonald's at this rotary.
          </p>
          <p>
            From the rotary, proceed west on routes 2A and 111. This will take
            you to Ayer center, and at about one mile routes 2A and 111 turn
            right; so will you. Proceed past Bishop Road on the left. Stay on Rt
            2A which forks to the left for approx another mile. The north
            entrance to the airstrip is on the left. There should be a sign
            marking the entrance. There are motorcycle driving classNamees on
            the lower lot to the right as you enter. Our event is up the hill to
            the left. Look for the person with the waivers at the top of the
            hill. There are a Dunkin Donuts and a Cumberland Farms between the
            Ayer center and the gate and there are gas stations along the route
            as well. You can find Moore Army Air Strip in Google maps just north
            of Ayer center. The entrance is right behind the tower on the north
            side of the site
          </p>

          <p>
            <img src={devens} style={{ width: '100%', maxWidth: '600px' }} />
          </p>
        </div>
      ),
    },
    {
      title: 'How do I join NE-SVT?',
      content: (
        <div className="flex flex-col gap-2">
          <p>
            Yearly membership is $10 and is required in order to participate in
            any NE-SVT event.{' '}
          </p>

          <div>
            <a
              href={import.meta.env.VITE_MSR_MEMBERSHIP_LINK}
              target="_blank"
              className="bg-blue-800 text-white p-2 rounded inline-block"
            >
              Sign up for {new Date().getFullYear().toString()} NE-SVT
              membership
            </a>
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-3/4 mx-auto mt-10">
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Item key={item.title} title={item.title}>
            {item.content}
          </Item>
        ))}
      </div>
    </div>
  )
}
