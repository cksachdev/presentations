let contentBody = {
  request: {
    content: {
      name: `Content Question ${key}`,
      description: `Content Question ${key}`,
      createdBy: _APICONFIG.CREATED_BY,
      organisation: _APICONFIG.ORG_NAME,
      createdFor: _APICONFIG.CREATED_FOR,
      contentType: 'Resource',
      mimeType: _CONFIG.MIME_TYE.ECML,
      resourceType: 'Learn',
      code: _APICONFIG.CREATED_BY,
      creator: _APICONFIG.CREATOR,
      body: contentEcmlBody,
    },
  },
}
