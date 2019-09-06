const Component = flowRight(
  withTracker(),
  withLocaleProvider(),
  withAccessCheck({
    config: ({ marketingType }) => {
      if (marketingType === MARKETING_TYPE_C.MERCHANT) {
        return AccessCheckConfig.concat(indirectAccessCheckConfig)
      }

      return AccessCheckConfig
    },
    ownerId: getOwnerId(),
  }),
  withPermission(),
)(Activity)
