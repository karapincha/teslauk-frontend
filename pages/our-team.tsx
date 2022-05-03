import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { Chip } from '@/components/atoms'
import { LinkListCard, SectionHeading } from '@/components/molecules'
import { ArticleViewTopic } from '@/components/molecules/ArticleViewTopic'
import { InlineCTA } from '@/components/molecules/InlineCTA'
import { initiativeList } from '@/dummy-data/initiative-list'
import { ContactCard } from '@/components/molecules/ContactCard'
import { useViewport } from '@/utils'
import { TeamMember } from '@/components/molecules/TeamMember'
import memberList from '@/dummy-data/team-members'
import { Tag } from '@/components/atoms'
import { TeamTag } from '@/components/atoms/TeamTag'
import volunteerTeamList from '@/dummy-data/volunteer-team'

const Home: NextPage = () => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()

  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container pt-[40px] pb-[24px] md:pb-[80px]'>
        <SectionHeading
          heading='Our Team'
          headingClassName='!font-600 !mb-[16px]'
          align='center'
          description='As per our club rules and articles of association our volunteer executive committee team run the day-to-day management of the club.'
          descriptionClassName='max-w-[490px] !text-base'
        />
      </div>

      <div className='container'>
        <h3 className='text-center text-h5 font-700 lg:text-h3'>Volunteer Executive Committee</h3>

        <div className='pt-[24px] pb-[24px] md:pb-[80px] lg:pt-[40px]'>
          <ul className='grid grid-cols-2 gap-[12px] lg:grid-cols-3 lg:gap-[48px]'>
            {(memberList || []).map(
              ({ id, name, role, image, linkedIn, mail }: any, index: number) => (
                <li key={id || index}>
                  <TeamMember
                    name={name}
                    role={role}
                    image={image}
                    linkedIn={linkedIn}
                    mail={mail}
                  />
                </li>
              )
            )}
          </ul>
        </div>

        <div className='pb-[40px] md:pb-[80px]'>
          <h3 className='text-h4 font-700 md:text-h3'>Volunteer Moderation Team</h3>

          <div className='pt-[24px] md:pt-[48px]'>
            <ul className='flex flex-wrap gap-[16px]'>
              {(volunteerTeamList || []).map(({ id, name }: any, index: number) => (
                <li key={id || index}>
                  <TeamTag name={name} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
