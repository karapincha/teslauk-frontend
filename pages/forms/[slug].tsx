import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, TextArea, Badge, TextField } from '@/components/atoms'
import { Common as CommonLayout } from '@/components/layouts'
import { getAllFormsWithSlug, getFormPage, SEND_MAIL } from '../../lib/graphql'
import { useMutation, gql } from '@apollo/client'
import { toast } from '@/components/molecules'

import { formSubmissionTemplate } from '@/email-templates/form-submission'

import { COMMON_EMAIL_ADDRESS } from '@/config/constants'

const Page: NextPage = ({ page }: any) => {
  const router = useRouter()
  const [values, setValues] = useState<any>({})
  const [errors, setErrors] = useState<any>({})

  const [sendEmail, { data, loading, error }] = useMutation(SEND_MAIL, {
    variables: {
      body: formSubmissionTemplate(
        values,
        `${page?.form?.emailSubject} ${router.query.info ? '- ' + router.query.info : ''}`
      ),
      subject: `${page?.form?.emailSubject} ${router.query.info ? '- ' + router.query.info : ''}`,
      to: page?.form?.submissionEmail || COMMON_EMAIL_ADDRESS,
    },
  })

  useEffect(() => {
    if (data?.sendEmail?.sent) {
      toast({ message: page?.form?.successMessage || 'Successfully submitted.', type: 'success' })
      setValues({})
    }
  }, [data])

  useEffect(() => {
    if (error) {
      toast({
        message: 'Something went wrong. please contact webmanager@teslaowners.org.uk',
        type: 'error',
      })
    }
  }, [error])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setErrors({})
    let errorsCheck: any = {}

    page?.form?.fields?.map((field: any) => {
      if (field.isRequired) {
        if (!values[field.label]) {
          return (errorsCheck[field.label] = `${field.label} is required`)
        }
      }
    })

    if (Object.keys(errorsCheck).length > 0) {
      setErrors(errorsCheck)
      toast({ message: 'Please fill in all required fields', type: 'error' })
    } else {
      sendEmail()
    }
  }

  return (
    <>
      <Head>
        <title>{`${page?.title} - Tesla Owners UK` || `Tesla Owners UK`}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container flex flex-col gap-[40px] pt-[40px] pb-[24px] md:gap-[48px]'>
          <div className='mx-auto flex w-full max-w-[782px] flex-col items-center gap-[40px] text-center'>
            <div className='flex w-full flex-col items-center gap-[24px] md:gap-[28px]'>
              <div className='flex justify-center'>
                <Badge>Tesla Owners UK</Badge>
              </div>
              <h1 className='text-h3 text-N-800 md:text-h1'>{page?.title}</h1>
              <p className='max-w-[472px] px-[16px] text-md text-N-600 md:px-0'>
                {page?.form?.description}
              </p>
            </div>
          </div>

          <div className='mx-auto grid w-full max-w-[800px] gap-x-[32px] gap-y-[16px] rounded-[8px] bg-white p-[40px] shadow-card-shadow md:grid-cols-2'>
            {page?.form?.fields?.map(
              ({ label, isRequired, placeholder, field }: any, index: number) => {
                if (field === 'textfield') {
                  return (
                    <div className='flex w-full flex-col gap-[4px]' key={index}>
                      <TextField
                        name={label.replace(/[^A-Z0-9]/gi, '_')}
                        label={label}
                        placeholder={placeholder}
                        required={isRequired}
                        value={values[label] || ''}
                        onChange={(e: any) => {
                          setValues({ ...values, [label]: e.target.value })
                        }}
                        isError={errors[label]}
                      />
                    </div>
                  )
                }

                if (field === 'textarea') {
                  return (
                    <div className='flex w-full flex-col gap-[4px] md:col-span-2' key={index}>
                      <TextArea
                        name={label.replace(/[^A-Z0-9]/gi, '_')}
                        label={label}
                        placeholder={placeholder}
                        required={isRequired}
                        value={values[label] || ''}
                        onChange={(e: any) => {
                          setValues({ ...values, [label]: e.target.value })
                        }}
                        isError={errors[label]}
                      />
                    </div>
                  )
                }
              }
            )}

            <div className='flex w-full flex-col gap-[16px] md:flex-row md:gap-[8px]'>
              <Button
                isLoading={loading}
                className='w-full md:max-w-[200px]'
                onClick={(e: any) => handleSubmit(e)}>
                {loading
                  ? page?.form?.submittingButtonText || 'Submitting'
                  : page?.form?.submitButtonText || 'Submit'}
              </Button>

              <Button
                appearance='secondary'
                className='w-full md:max-w-[200px]'
                onClick={() => router.back()}>
                Back
              </Button>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export async function getStaticProps({ params, preview = false, previewData, req }: any) {
  const data = await getFormPage(params.slug || '')

  return {
    props: {
      preview,
      page: data.form,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths({ req }: any) {
  const forms = await getAllFormsWithSlug()

  return {
    paths: forms?.edges.map(({ node }: any) => `/forms/${node.slug}`) || [],
    fallback: true,
  }
}

export default Page
