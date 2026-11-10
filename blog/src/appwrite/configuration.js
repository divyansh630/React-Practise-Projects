import Config from "../config/config";

import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(Config.appwriteUrl)
      .setProject(Config.appwriteProjectID);
    this.databases = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createRow({
        databaseId: Config.appwriteDatabaseID,
        tableId: Config.appwriteCollectionID,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      throw error;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateRow({
        databaseId: Config.appwriteDatabaseID,
        tableId: Config.appwriteCollectionID,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
      throw error;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteRow({
        databaseId: Config.appwriteDatabaseID,
        tableId: Config.appwriteCollectionID,
        rowId: slug,
      });
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);

      return false;
    }
  }
  async getpost(slug) {
    try {
      return await this.databases.getRow({
        databaseId: Config.appwriteDatabaseID,
        tableId: Config.appwriteCollectionID,
        rowId: slug,
      });
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);

      return false;
    }
  }
  async getposts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listRows({
        databaseId: Config.appwriteDatabaseID,
        tableId: Config.appwriteCollectionID,
        queries,
      });
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);

      return false;
    }
  }
  //file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile({
        bucketId: Config.appwriteBucketID,
        fileId: ID.unique(),
        file,
      });
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);

      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile({
        bucketId: Config.appwriteBucketID,
        fileId,
      });
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);

      return false;
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview({
      bucketId: Config.appwriteBucketID,
      fileId,
    });
  }
}

const service = new Service();

export default service;
