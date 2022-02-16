import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { PageHeader } from '@/components/molecules'
import { Button } from '@/components/atoms'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='pt-[80px]' />

      <div className='container flex pt-[100px]'>
        <PageHeader
          heading='Pass on your expertise <br />and experiences'
          headingClassName='text-N-800'
          icon={<i className='ri-edit-box-line text-[40px] text-B-500' />}
        />
      </div>

      <div className='container flex flex-col'>
        <article className='prose mx-auto max-w-[782px] py-[80px]'>
          <p>
            Thank you for offering to pass on your expertise and experiences by writing content for
            other owners in the UK, it’s really appreciated by not only the Tesla Owners UK team but
            also all UK Tesla Owners.
          </p>

          <h4>What we hope you can provide:</h4>

          <ul>
            <li>
              Useful and unique content for the website to help other owners similar to you that may
              not have the full understanding of a particular task or issue.
            </li>
            <li>Detailed step-by-step guides for technical/complex processes.</li>
            <li>Unique imagery (if possible) to explain the article</li>
          </ul>

          <h4>What incentives are there?</h4>

          <ul>
            <li>
              We thank our authors in a unique way, more will be revealed after several approved
              posts.
            </li>
          </ul>

          <h4>Before creating a guide please:</h4>

          <ol>
            <li>
              Kindly check <a>https://teslaowners.org.uk/guides</a> to see if a similar guide
              already exists or another could be slightly amended to add the content you’re thinking
              of creating. If you wish to make changes to an existing article visit the article and
              at the bottom click on ‘Like or Dislike’ and a box will appear to provide feedback,
              this gets checked by the team periodically and changes will be made ASAP.
            </li>
            <li>
              You may wish to write the content on Google Docs or similar before adding it to{' '}
              <a>https://teslaowners.org.uk/my-account/author</a> as formating isn’t ideal. If you
              plan to write lots of content please get in touch with the web manager who can help by
              swapping your account to an Author.
            </li>
          </ol>

          <h4>Things to consider:</h4>

          <ul>
            <li>Try to remove any personal opinions/bias.</li>
            <li>Ensure you suitably reference any 3rd party content.</li>
            <li>
              See where you can cross-link to similar guides to remove duplication of content.
            </li>
            <li>No personal referral links or self-promotion allowed.</li>
          </ul>

          <h4>How do I submit content?</h4>

          <ul>
            <li>
              All supporters can submit content within <a>https://teslaowners.org.uk/author</a>
            </li>
            <li>
              If you wish to provide more help (e.g. writing multiple articles or amending existing)
              <a> speak with the Web Manager</a> or who can help further by swapping your account to
              an ‘Author’.
            </li>
          </ul>

          <h4>After submitting your guide:</h4>

          <ul>
            <li>
              The Tesla Owners UK team will check over the content and make any amendments (e.g.
              formatting) and add any required images.
            </li>
            <li>
              Once ready it will be posted on the guides section of the website for all to view.
            </li>
          </ul>

          <p>
            Thank you, if you have any questions please <a>contact the team.</a>
          </p>
          <div className='pt-[32px]'>
            <Button iconAfter={<i className='ri-arrow-right-line text-lg' />}>
              Proceed to submission
            </Button>
          </div>
        </article>
      </div>

      <SupplierRibbon className='border-t border-N-100' />
      <Footer />
    </>
  )
}

export default Home
