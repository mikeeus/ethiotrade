class HscodesController < ApplicationController
  before_action :set_hscode, only: [:show, :update, :destroy]

  def search
    search_term = params[:search]
    @search_result = HscodeSearch.new(search_term).search
    render json: @search_result
  end


  # GET /hscodes
  def index
    @hscodes = Hscode.all

    render json: @hscodes
  end

  # GET /hscodes/1
  def show
    render json: @hscode
  end

  # POST /hscodes
  def create
    @hscode = Hscode.new(hscode_params)

    if @hscode.save
      render json: @hscode, status: :created, location: @hscode
    else
      render json: @hscode.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hscodes/1
  def update
    if @hscode.update(hscode_params)
      render json: @hscode
    else
      render json: @hscode.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hscodes/1
  def destroy
    @hscode.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hscode
      @hscode = Hscode.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def hscode_params
      params.fetch(:hscode, {})
    end
end
