import Image from 'next/image';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { TwitterEmptySvg } from 'components/Svgs/TwitterEmptySvg';
import { EmailEmptyIcon } from 'components/Svgs/EmailEmptyIcon';
import { useState } from 'react';
import { sanityClient } from 'lib/sanity.client';
import { SanityDocumentStub } from '@sanity/client';

type ArtistForm = {
  comments: string;
  contact: 'twitter' | 'email' | null;
  creationProcess: string;
  description: string;
  email: string;
  name: string;
  status: 'pending' | 'reviewed'; // for internal use - hidden in form
  twitterUser: string;
  workLink: string;
};

const TWITTER = 'twitter';
const EMAIL = 'email';

const initialForm: SanityDocumentStub<ArtistForm> = {
  _type: 'artistFormSubmission',
  comments: '',
  contact: null,
  creationProcess: '',
  description: '',
  email: '',
  name: '',
  status: 'pending',
  twitterUser: '',
  workLink: '',
};

enum FormStatusEnum {
  NOT_SENT = 'notSent',
  LOADING = 'loading',
  SENT_OK = 'sentOk',
  ERROR = 'error',
}

type FormStatus = FormStatusEnum;

export const CuratedArtistForm = (): JSX.Element => {
  const [form, setForm] = useState<SanityDocumentStub<ArtistForm>>(initialForm);
  const [, setFormStatus] = useState<FormStatus>(FormStatusEnum.NOT_SENT);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormStatus(FormStatusEnum.LOADING);
    sanityClient
      .create(form)
      .then(() => {
        setFormStatus(FormStatusEnum.SENT_OK);
        setForm(initialForm);
      })
      .catch((error) => {
        console.log({ error });
        setFormStatus(FormStatusEnum.ERROR);
      });
  };

  return (
    <div
      className="flex flex-col py-20 mx-auto max-w-screen-2xl"
      id="become-curated-artist"
    >
      <HeroTitle accentColor={'text-[#920d3d]'} subtitle="Apply">
        Become a curated artist
      </HeroTitle>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <form
          className="grid gap-6 mb-6 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans text-sm font-bold">Name*</span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              name={'name'}
              onChange={handleOnChange}
              placeholder="Ela Fitzgerlad"
              type="text"
              value={form.name}
            />
          </label>
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans text-sm font-bold">
              Twitter handle
            </span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              name={'twitterUser'}
              onChange={handleOnChange}
              placeholder="@ElaFitzgerlad"
              type="text"
              value={form.twitterUser}
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">Email*</span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              name={'email'}
              onChange={handleOnChange}
              placeholder="elafitzgerlad@gmail.com"
              type="email"
              value={form.email}
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              Link to example works*
            </span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              name={'workLink'}
              onChange={handleOnChange}
              placeholder="www.link.com "
              type="text"
              value={form.workLink}
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              What is unique about your work that other artists (who use AI)
              haven’t done before? *
            </span>
            <textarea
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              name={'description'}
              onChange={handleOnChange}
              placeholder="My work is epic because"
              value={form.description}
            ></textarea>
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              In what ways do use AI in your artworks?*
            </span>
            <textarea
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              name={'creationProcess'}
              onChange={handleOnChange}
              placeholder="To generat epic stuff"
              value={form.creationProcess}
            ></textarea>
          </label>
          <div className="md:col-span-2">
            <label className="block mb-2 font-sans text-sm font-bold">
              Would you prefer contact via Twitter or Email?
            </label>
            <div className="grid w-1/2 grid-cols-2 gap-3 ">
              <label className="flex items-center justify-center gap-2 py-2 text-sm bg-gray-100 border border-gray-300 cursor-pointer hover:bg-gray-200">
                <input
                  name="contact"
                  onChange={handleOnChange}
                  type="radio"
                  value={TWITTER}
                />
                <TwitterEmptySvg />
                Twitter
              </label>
              <label className="flex items-center justify-center gap-2 py-2 text-sm bg-gray-100 border border-gray-300 cursor-pointer hover:bg-gray-200">
                <input
                  name="contact"
                  onChange={handleOnChange}
                  type="radio"
                  value={EMAIL}
                />
                <EmailEmptyIcon />
                Email
              </label>
            </div>
          </div>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              Anything else you’d like to add?
            </span>

            <textarea
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              name="comments"
              onChange={handleOnChange}
              placeholder="Nope"
              value={form.comments}
            ></textarea>
          </label>
          <div>
            <button
              className="flex w-56 items-center justify-center py-3 text-white duration-300 bg-[#920d3d] px-9"
              type="submit"
            >
              Apply
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-12">
          <Image
            alt="imagen"
            className="object-cover h-full mb-12 shadow-2xl md:w-[565px]"
            height={1000}
            src="/assets/curated/become-a-curated-artist.jpg"
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};
