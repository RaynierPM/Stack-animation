import Chip from './Chips'

export default function ChipContainer({ data }: { data: string[] }) {

return <div className='chipContainer'>
    {data.length? 
      data.map((item, index) => <Chip key={index} content={item} />) 
    :
      <h3 style={{ textAlign: 'center', width: '100%', color: '#666' }}>Add some chips</h3>
    }
  </div>
}
