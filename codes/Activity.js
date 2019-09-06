export default function Activity({ authData, marketingType }) {
  const [cardId, setCardId] = useState(false)
  const auth = authData[cardId] || {}

  return (
    <Fragment>
      {ActivityConfig.map(({ id, ...rest }) => {
        return (
          <ActivityCardContainer
            key={id}
            onCardClick={(e, clickedCardId) => {
              setCardId(clickedCardId)
            }}
          />
        )
      })}
      <Modal
        onOk={() => {
          // ...
          setCardId(false)
        }}
        onCancel={() => {
          setCardId(false)
        }}
      >
        <p>{auth.errorMsg}</p>
      </Modal>
    </Fragment>
  )
}
