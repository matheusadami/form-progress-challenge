import { ChangeEvent, useState } from 'react'
import { Validator } from './utils/validator'

interface Form {
  name: string
  email: string
  maritalStatus: string
  genre: string
}

export function App() {
  const [formData, setFormData] = useState<Form>({
    name: '',
    email: '',
    maritalStatus: '',
    genre: ''
  })
  const validFields: string[] = []
  const namedFormFields = ['name', 'email', 'maritalStatus', 'genre']
  const validPercentage = (validFields.length * 100) / namedFormFields.length

  checkValidFields()

  function checkValidFields() {
    for (const field of namedFormFields) {
      const isValid = Validator.valid(field, formData[field as keyof Form])
      const isIncludes = validFields.includes(field)
      if (isValid) {
        if (!isIncludes) {
          validFields.push(field)
        }
      } else if (isIncludes) {
        validFields.splice(validFields.indexOf(field), 1)
      }
    }
  }

  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, name: e.target.value }))
  }

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, email: e.target.value }))
  }

  function handleMaritalStatus(e: ChangeEvent<HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, maritalStatus: e.target.value }))
  }

  function handleGenre(value: string) {
    setFormData((prev) => ({ ...prev, genre: value }))
  }

  function onSubmit() {
    alert('Form successfully submitted!')
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen p-4 bg-gray-100">
      <div className="max-lg:min-w-[75%] min-w-[50%]">
        <div className="mb-5 font-semibold text-4xl text-gray-700 max-sm:text-lg">
          Form Progress Challenge
        </div>
        <div className="w-full p-7 bg-white rounded-lg shadow-md">
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{
                width: `${validPercentage}%`
              }}>
              <div className={validPercentage > 0 ? '' : 'invisible'}>
                {validPercentage}%
              </div>
            </div>
          </div>
          <form>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6">
                <label
                  htmlFor="name"
                  className="form-label inline-block mb-2 text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleName}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="form-label inline-block mb-2 text-gray-700">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleEmail}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="marital-status"
                  className="form-label inline-block mb-2 text-gray-700">
                  Marital Status
                </label>
                <select
                  id="marital-status"
                  name="marital-status"
                  value={formData.maritalStatus}
                  onChange={handleMaritalStatus}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none">
                  <option value=""></option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="separated">Separated</option>
                </select>
              </div>
              <div className="col-span-6">
                <label className="form-label inline-block mb-2 text-gray-700">
                  Genre
                </label>
                <div className="flex items-center gap-7">
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-blue-600 checked:border-4 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="genre"
                      id="masculine"
                      value={formData.genre}
                      onChange={(e) => handleGenre('Masculine')}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="masculine">
                      Masculine
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-blue-600 checked:border-4 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="genre"
                      id="feminine"
                      value={formData.genre}
                      onChange={(e) => handleGenre('Feminine')}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="feminine">
                      Feminine
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={validPercentage !== 100}
                  className="relative flex w-full justify-center rounded-md border border-transparent bg-transparent py-2 px-4 mt-2 text-sm font-medium text-white bg-indigo-700 border-indigo-700 disabled:opacity-25 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
