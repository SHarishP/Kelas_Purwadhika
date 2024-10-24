import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { MOCK_API_URL } from "../config/envConfig";

async function GetExpenseList(req: Request, res: Response, next: NextFunction) {
  try {
    const { data } = await axios.get(`${MOCK_API_URL}`);
    res.status(200).send({
      message: "GetExpenseList Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function GetExpenseDetail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${MOCK_API_URL}/${id}`);
    res.status(200).send({
      message: "GetExpenseDetail Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function CreateNewExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { title, nominal, type, category, date } = req.body;
    const payload = { title, nominal, type, category, date };
    const response = await axios.post(`${MOCK_API_URL}`, payload);
    res.status(200).send({
      message: "Insert New Expense",
      data: response.data,
    });
  } catch (err) {
    next(err);
  }
}

async function UpdateExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { title, nominal, type, category, date } = req.body;
    const payload = { title, nominal, type, category, date };
    const response = await axios.put(`${MOCK_API_URL}/${id}`, payload);
    res.status(200).send({
      message: "UpdateExpense Success",
      data: response.data,
    });
  } catch (err) {
    next(err);
  }
}

async function DeleteExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const response = await axios.delete(`${MOCK_API_URL}/${id}`);
    res.status(200).send({
      messsage: `DeleteExpense id : ${id} success`,
      data: response.data,
    });
  } catch (err) {
    next(err);
  }
}

export {
  GetExpenseList,
  GetExpenseDetail,
  CreateNewExpense,
  UpdateExpense,
  DeleteExpense,
};
