import React, { Component } from "react";

export default class MultipleUpload extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  render() {
    return (
      <div className="transaction_card p-5 mt-5">
        <h1 className="text-left font-bold text-base">Multiple File Upload</h1>
        <form className="mt-3">
          <div className="form-group multi-preview flex gap-3">
            {(this.fileArray || []).map((url) => (
              <img src={url} className="w-[200px]" alt="..." />
            ))}
          </div>

          <div className="form-group">
            <input
              type="file"
              className="form-control w-full"
              onChange={this.uploadMultipleFiles}
              multiple
            />
          </div>
          <button
            type="button"
            className="btn btn-danger btn-block"
            onClick={this.uploadFiles}
          >
            Upload
          </button>
        </form>
      </div>
    );
  }
}
