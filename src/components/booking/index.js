import './index.scss';

const Booking = () => {
  return (
    <div className='booking_section'>
      <div className='book'>
        <div className='book_form'>
          <h1 className='book_form_heading u_secondary_heading'>
            {'Start Booking Now'}
          </h1>
          <form action='#' className='form'>
            <div className='form_group'>
              <input
                id='name'
                type='text'
                className='form_input'
                required
                placeholder='Full Name'
                autoComplete='off'
              />
              <label htmlFor='name' className='form_label'>
                Full Name
              </label>
            </div>
            <div className='form_group'>
              <input
                id='email'
                type='email'
                className='form_input'
                required
                placeholder=' Email Id'
                autoComplete='off'
              />
              <label htmlFor='email' className='form_label'>
                Email Id
              </label>
            </div>
            <div className='form_group'>
              <div className='form_radio_group'>
                <input
                  type='radio'
                  id='small_group'
                  className='form_radio_input'
                  name='size'
                />
                <label htmlFor='small_group' className='form_radio_label'>
                  <span className='form_radio_button' /> Small Tour Group
                </label>
              </div>
              <div className='form_radio_group'>
                <input
                  type='radio'
                  id='large_group'
                  className='form_radio_input'
                  name='size'
                />
                <label htmlFor='large_group' className='form_radio_label'>
                  <span className='form_radio_button' /> Large Tour Group
                </label>
              </div>
            </div>
            <div className='form_group form_group_button'>
              <button className='green_button_text form_button'>
                Next Step &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
