import { NextSeo } from 'next-seo';
import siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <NextSeo
        title="Uses | Serking de Orayom"
        description={siteMeta.description}
        canonical="https://serking.tech/uses"
        openGraph={{
          url: 'https://serking.tech/uses',
          images: [
            {
              url: `https://serking.tech/og.png`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'serking.tech',
        }}
      />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff."
      >
        <div className="space-y-20">

          <ToolsSection title="Workstation">
            <Tool title="AMD Ryzen™ 5 2600, NVIDIA GTX 1650 Super, 16 GB RAM powered Desktop Computer">
              I mostly do web and mobile app development so this is kinda overkill.
            </Tool>
            <Tool title='ASUS 24" 144Hz IPS Monitor'>
              My primary display. I use this for coding and well... gaming. A lot.
            </Tool>
            <Tool title='AOC 21.5" 75Hz VA Monitor'>
              A second display (or even third) is a must-have for every developer. I cannot imagine myself working on a single display anymore.
            </Tool>
            <Tool title="ASUS X515JP Laptop">
              An entry-level laptop that offers performance enough to demo projects when meeting with a client. It also gets the job done when using an AVD (Android Emulator from Android Studio), or when just presenting web-based projects.
            </Tool>
            <Tool title="Apple iPad (6th Generation)">
              Enough to run iOS apps I develop. I only use React Native for iOS development anyway.
            </Tool>
            <Tool title="Royal Kludge RK84 75% Wireless Mechanical Keyboard">
              With all the typing, a very good keyboard is a necessity. And this is a very good keyboard for me.
            </Tool>
            <Tool title="Logitech G304 Lightspeed Wireless Gaming Mouse">
              Best mouse I have ever had. Great for work and gaming purposes.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Best text editor I have ever used. Used by many so why shoudn’t I?
            </Tool>
            <Tool title="Postman">
              When you started to create and use APIs, Postman will always be your trusted little friend.
            </Tool>
            <Tool title="Android Virtual Device (Android Studio)">
              As if I have a choice not to use it. (I know, I know, I can just use my hardware device)
            </Tool>
            <Tool title="MySQL Workbench">
              Comes with MySQL, I just use it as it is. Best feature I use is the EER Diagram.
            </Tool>
            <Tool title="MongoDB Compass">
              I use MongoDB, of course I’d use MongoDB Compass. Free, interactive, and is the easiest way to explore and manipulate your data.
            </Tool>
            <Tool title="GitHub Desktop">
              I keep all my public and private repositories on GitHub, and have been doing it that way since I started software development. GitHub Desktop simply maximizes my experience with it.
            </Tool>
            <Tool title="Google Chrome">
              I mostly use Google apps (Google Workspace) anyway so why not use it all in one platform. I’d like to give Firefox and Edge another shot one day but for now still using Chrome for both development and general browsing.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Design">
            <Tool title="Adobe Photoshop">
              My go-to app when I need to quickly create and edit images. I’m not good at Photoshop though. I just use it, maybe, because old habits die hard.
            </Tool>
            <Tool title="Figma">
              I started using Figma as just a design tool but now it’s become my virtual whiteboard. Never would have expected its features to sync with me. More performant and cross-platform.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Recreation">
            <Tool title="Nintendo Switch Lite">
              A Nintendo fan boy since I was a little kid, started on Game Boy Color, Game Boy Advance SP, moved up to DS, 3DS, and now the Switch. I chose the Lite so I can play while lying down whenever I get tired sitting for hours in front of the computer.
            </Tool>
            <Tool title="Chess">
              A good game of chess every now and then is a must-have. Keeps my logical mind intact. Haha :D
            </Tool>
          </ToolsSection>

        </div>
      </SimpleLayout>
    </>
  )
}
